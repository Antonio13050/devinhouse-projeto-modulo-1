import React from "react";
import Header from "../../components/header";
import { ListPharmaciesContext } from "../../contexts/listPharmaciesContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const NewPharmacySchema = z.object({
    razaoSocial: z.string().nonempty("Razão social é obrigatório"),
    cnpj: z.string().nonempty("CNPJ é obrigatório").length(14, "CNPJ inválido"),
    nomeFantasia: z.string().nonempty("Nome fantasia é obrigatório"),
    email: z.string().nonempty("E-mail é obrigatório").email("E-mail inválido"),
    telefone: z
        .string()
        .optional()
        .superRefine((value, ctx) => {
            if (!value) return;

            if (!/^[0-9]+$/.test(value) || value.length != 11) {
                return ctx.addIssue({
                    code: "custom",
                    message: "Telefone inválido",
                });
            }
        }),
    celular: z
        .string()
        .nonempty("Celular é obrigatório")
        .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Celular inválido"),
    endereco: z.object({
        cep: z.string().nonempty("CEP é obrigatório").length(8, "CEP inválido"),
        logradouro: z.string().nonempty("Logradouro é obrigatório"),
        numero: z
            .string()
            .nonempty("Número é obrigatório")
            .regex(/^[0-9]+$/, "Número inválido"),
        bairro: z.string().nonempty("Bairro é obrigatório"),
        cidade: z.string().nonempty("Cidade é obrigatório"),
        estado: z.string().nonempty("Estado é obrigatório"),
        complemento: z.string(),
    }),

    geolocalizacao: z.object({
        latitude: z
            .string()
            .nonempty("Latitude é obrigatório")
            .regex(/^[0-9.,]+$/, "Latitude inválida"),
        longitude: z
            .string()
            .nonempty("Longitude é obrigatório")
            .regex(/^[0-9.,]+$/, "Longitude inválida"),
    }),
});

function NewPharmacy() {
    const { listPharmacies, setListPharmacies, addPharmacy } = useContext(
        ListPharmaciesContext
    );
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(NewPharmacySchema),
    });

    const onSubmit = (data) => {
        addPharmacy(data);
    };

    const checkCep = (e) => {
        if (e.target.value.length !== 8) {
            return;
        }
        const cep = e.target.value.replace(/|D/g, "");
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json`)
            .then((response) => response.json())
            .then((data) => {
                try {
                    setValue("endereco.logradouro", data.logradouro);
                    setValue("endereco.bairro", data.bairro);
                    setValue("endereco.cidade", data.localidade);
                    setValue("endereco.estado", data.uf);
                } catch (error) {
                    console.log(error);
                }
            });
    };

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Razão social</label>
                <input
                    type="text"
                    label="Razão social"
                    {...register("razaoSocial")}
                />
                <span>{errors.razaoSocial?.message}</span>
                <label htmlFor="cnpj">CNPJ</label>
                <input type="number" label="CNPJ" {...register("cnpj")} />
                <span>{errors.cnpj?.message}</span>
                <label htmlFor="nomeFantasia">Nome fantásia</label>
                <input
                    type="text"
                    label="Nome fantásia"
                    {...register("nomeFantasia")}
                />
                <span>{errors.nomeFantasia?.message}</span>
                <label htmlFor="email">E-mail</label>
                <input type="email" label="E-mail" {...register("email")} />
                <span>{errors.email?.message}</span>
                <label htmlFor="telefone">Telefone</label>
                <input type="tel" label="Telefone" {...register("telefone")} />
                <span>{errors.telefone?.message}</span>
                <label htmlFor="celular">Celular</label>
                <input type="tel" label="Celular" {...register("celular")} />
                <span>{errors.celular?.message}</span>
                <label htmlFor="cep">cep</label>
                <input
                    type="number"
                    label="CEP"
                    {...register("endereco.cep")}
                    onBlur={checkCep}
                    onKeyUp={checkCep}
                />
                <span>{errors.endereco?.cep?.message}</span>
                <label htmlFor="logradouro">Logradouro</label>
                <input
                    type="text"
                    label="Logradouro"
                    {...register("endereco.logradouro")}
                />
                <span>{errors.endereco?.logradouro?.message}</span>
                <label htmlFor="numero">Numero</label>
                <input
                    type="number"
                    label="Número"
                    {...register("endereco.numero")}
                />
                <span>{errors.endereco?.numero?.message}</span>
                <label htmlFor="bairro">Bairro</label>
                <input
                    type="text"
                    label="Bairro"
                    {...register("endereco.bairro")}
                />
                <span>{errors.endereco?.bairro?.message}</span>
                <label htmlFor="cidade">Cidade</label>
                <input
                    type="text"
                    label="Cidade"
                    {...register("endereco.cidade")}
                />
                <span>{errors.endereco?.cidade?.message}</span>
                <label htmlFor="estado">Estado</label>
                <input
                    type="text"
                    label="Estado"
                    {...register("endereco.estado")}
                />
                <span>{errors.endereco?.estado?.message}</span>

                <label htmlFor="complemento">Complemento</label>
                <input
                    type="text"
                    label="Complemento"
                    {...register("endereco.complemento")}
                />
                <span>{errors.endereco?.complemento?.message}</span>
                <label htmlFor="latitude">Latitude</label>
                <input
                    type="text"
                    label="Latitude"
                    {...register("geolocalizacao.latitude")}
                />
                <span>{errors.geolocalizacao?.latitude?.message}</span>
                <label htmlFor="longitude">Longitude</label>
                <input
                    type="text"
                    label="Longitude"
                    {...register("geolocalizacao.longitude")}
                />
                <span>{errors.geolocalizacao?.longitude?.message}</span>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default NewPharmacy;
