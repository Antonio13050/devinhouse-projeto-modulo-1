import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Login() {
    const { register, handleSubmit } = useForm();
    const [user, setUser] = useState({});
    const onSubmit = (data) => {
        setUser(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input label="Email" {...register("email")} />
            <input label="Senha" {...register("password")} />
            <button type="submit">Logar</button>
        </form>
    );
}

export default Login;
