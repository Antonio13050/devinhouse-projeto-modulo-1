import React from "react";
import Header from "../../components/header";
import { ListPharmaciesContext } from "../../contexts/listPharmaciesContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./styles.css";

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

            <main className="container main-new-pharmacy flex-column">
                <h2 className="mb-4">Nova Farmácia</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="row">
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Razão social</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("razaoSocial")}
                        />
                        <span className="color-red">
                            {errors.razaoSocial?.message}
                        </span>
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">CNPJ</label>
                        <input
                            type="number"
                            className="form-control"
                            {...register("cnpj")}
                        />
                        <span>{errors.cnpj?.message}</span>
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Nome fantásia</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("nomeFantasia")}
                        />
                        <span>{errors.nomeFantasia?.message}</span>
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">E-mail</label>
                        <input
                            type="email"
                            className="form-control"
                            {...register("email")}
                        />
                        <span>{errors.email?.message}</span>
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Telefone</label>
                        <input
                            type="tel"
                            className="form-control"
                            {...register("telefone")}
                        />
                        <span>{errors.telefone?.message}</span>
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Celular</label>
                        <input
                            type="tel"
                            className="form-control"
                            {...register("celular")}
                        />
                        <span>{errors.celular?.message}</span>
                    </div>

                    <hr className="my-4" />

                    <div className="col-md-2 mb-3">
                        <label className="form-label">CEP</label>
                        <input
                            type="number"
                            className="form-control"
                            {...register("endereco.cep")}
                            onBlur={checkCep}
                            onKeyUp={checkCep}
                        />
                        <span>{errors.endereco?.cep?.message}</span>
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Logradouro</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("endereco.logradouro")}
                        />
                        <span>{errors.endereco?.logradouro?.message}</span>
                    </div>

                    <div className="col-md-2 mb-3">
                        <label className="form-label">Numero</label>
                        <input
                            type="number"
                            className="form-control"
                            {...register("endereco.numero")}
                        />
                        <span>{errors.endereco?.numero?.message}</span>
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Bairro</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("endereco.bairro")}
                        />
                        <span>{errors.endereco?.bairro?.message}</span>
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Cidade</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("endereco.cidade")}
                        />
                        <span>{errors.endereco?.cidade?.message}</span>
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Estado</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("endereco.estado")}
                        />
                        <span>{errors.endereco?.estado?.message}</span>
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Complemento</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("endereco.complemento")}
                        />
                        <span>{errors.endereco?.complemento?.message}</span>
                    </div>

                    <hr className="my-4" />

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Latitude</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("geolocalizacao.latitude")}
                        />
                        <span>{errors.geolocalizacao?.latitude?.message}</span>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Longitude</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("geolocalizacao.longitude")}
                        />
                        <span className=".text-danger span.error">
                            {errors.geolocalizacao?.longitude?.message}
                        </span>
                    </div>
                    <div className="col-md-12 mb-3">
                        <button
                            type="submit"
                            className="btn-form-new-pharmacy btn"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default NewPharmacy;
