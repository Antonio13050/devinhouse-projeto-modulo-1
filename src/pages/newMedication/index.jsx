import React from "react";
import Header from "../../components/header";
import { useForm } from "react-hook-form";
import "./styles.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const newMedicineSchema = z.object({
    medicine: z.string().nonempty("Medicamento é obrigatório"),
    laboratory: z.string().nonempty("Laboratório é obrigatório"),
    dosage: z.string().nonempty("Dosagem é obrigatório"),
    type: z.string().nonempty("Tipo é obrigatório"),
    price: z.string().nonempty("Preço é obrigatório"),
    description: z.string(),
});

function NewMedication() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(newMedicineSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <Header />
            <div className="container main-new-medication flex-column">
                <h2 className="mb-4">Novo Medicamento</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Medicamento</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("medicine")}
                        />
                        <span className="color-red">
                            {errors.medicine?.message}
                        </span>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Laboratorio</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("laboratory")}
                        />
                        <span className="color-red">
                            {errors.laboratory?.message}
                        </span>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Dosagem</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("dosage")}
                        />
                        <span className="color-red">
                            {errors.dosage?.message}
                        </span>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Tipo</label>
                        <select className="form-select" {...register("type")}>
                            <option value="fitoterapico">Fitoterápico</option>
                            <option value="homeopatico">Homeopático</option>
                        </select>
                        <span className="color-red">
                            {errors.type?.message}
                        </span>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Preço Unitário</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("price")}
                        />
                        <span className="color-red">
                            {errors.price?.message}
                        </span>
                    </div>
                    <hr />
                    <div className="col-md-12 mb-3">
                        <label className="form-label">Descrição</label>
                        <textarea
                            className="form-control"
                            {...register("description")}
                        />
                        <span className="color-red">
                            {errors.description?.message}
                        </span>
                    </div>
                    <div className="col-md-12 mb-3">
                        <button
                            type="submit"
                            className="btn-form-new-medication btn"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewMedication;