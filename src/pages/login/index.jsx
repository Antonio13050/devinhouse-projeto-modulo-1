import React from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";
import "./styles.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formLoginchema = z.object({
    email: z.string().nonempty("Digite o e-mail").email("E-mail inválido"),
    password: z.string().min(1, "Digite a senha"),
});

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formLoginchema),
    });

    const { users, setIsLogged } = useContext(UserContext);

    const onSubmit = (data) => {
        const userExists = users.find((user) => user.email === data.email);
        if (!userExists) {
            return alert("Usuário não encontrado");
        } else if (userExists.password !== data.password) {
            return alert("Senha incorreta");
        }
        alert("Usuário logado");
        setIsLogged(true);
        localStorage.setItem("isLogged", true);
    };

    return (
        <>
            <main className="text-center container flex-column">
                <h1 className="h1 mb-5 fw-normal">Bem vindo a DEVinPharmacy</h1>
                <div className="form-signin">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="p-5 form-login"
                    >
                        <h1 className="h3 mb-3 fw-normal">
                            Entrar com e-mail e senha
                        </h1>
                        <div className="form-group text-start mb-3">
                            <label>E-mail</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="name@example.com"
                                {...register("email")}
                            />
                            {errors.email && (
                                <p className="text-danger">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div className="form-group text-start mb-3">
                            <label>Senha</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Senha"
                                {...register("password")}
                            />
                            {errors.password && (
                                <p className="text-danger">
                                    {errors.password.message}
                                </p>
                            )}
                            <hr />
                            <p>Login cadastrado: admin@teste.com</p>
                            <p>Senha: abcd1234</p>
                        </div>
                        <div className="text-start">
                            <button
                                className="btn-login btn w-100"
                                type="submit"
                            >
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}

export default Login;
