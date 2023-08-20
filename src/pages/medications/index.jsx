import React from "react";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";
import Header from "../../components/header";

function Medications() {
    const { setIsLogged } = useContext(UserContext);

    const logout = () => {
        setIsLogged(false);
        localStorage.setItem("isLogged", false);
    };
    return (
        <div>
            <Header />
            Medications
            <button onClick={logout}>Sair</button>
        </div>
    );
}

export default Medications;
