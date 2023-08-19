import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";

function Login() {
    const { register, handleSubmit } = useForm();

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" label="Email" {...register("email")} />
            <input type="password" label="Senha" {...register("password")} />
            <button type="submit">Logar</button>
        </form>
    );
}

export default Login;
