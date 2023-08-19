import React from "react";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";

function Medications() {
    const { setIsLogged } = useContext(UserContext);

    const logout = () => {
        setIsLogged(false);
        localStorage.setItem("isLogged", false);
    };
    return (
        <div>
            Medications
            <button onClick={logout}>Sair</button>
        </div>
    );
}

export default Medications;
