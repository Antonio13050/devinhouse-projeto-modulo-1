import React from "react";
import Header from "../../components/header";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import "./styles.css";

function UserRegistration() {
    const { users, addUser } = useContext(UserContext);

    const NewUserRegistrationSchema = z.object({
        name: z.string().nonempty("Nome é obrigatório"),
        email: z
            .string()
            .nonempty("E-mail é obrigatório")
            .email("E-mail inválido")
            .superRefine((value, ctx) => {
                const userExists = users.find((user) => user.email === value);
                if (userExists) {
                    return ctx.addIssue({
                        code: "custom",
                        message: "E-mail já cadastrado",
                    });
                }
            }),
        password: z
            .string()
            .nonempty("Senha é obrigatório")
            .superRefine((value, ctx) => {
                const regex = /^(?=.*[a-zA-Z])(?=.*\d).+/;
                if (!regex.test(value) || value.length < 8) {
                    return ctx.addIssue({
                        code: "custom",
                        message:
                            "A senha deve conter no mínimo 8 caracteres, com letras e números",
                    });
                }
            }),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(NewUserRegistrationSchema),
    });

    const onSubmit = (data) => {
        addUser(data);
    };
    return (
        <div>
            <Header />
            <div className="container main-new-user flex-column">
                <h2 className="mb-4">Cadastrar Usuário</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="row">
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Nome:</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("name")}
                        />
                        <span className="color-red">
                            {errors.name?.message}
                        </span>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">E-mail:</label>
                        <input
                            type="email"
                            className="form-control"
                            {...register("email")}
                        />
                        <span className="color-red">
                            {errors.email?.message}
                        </span>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Senha:</label>
                        <input
                            type="password"
                            className="form-control"
                            {...register("password")}
                        />
                        <span className="color-red">
                            {errors.password?.message}
                        </span>
                    </div>
                    <div className="col-md-12 mb-3">
                        <button type="submit" className="btn-form-new-user btn">
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserRegistration;
