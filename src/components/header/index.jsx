import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";
import "./styles.css";
import logo from "../../assets/logo.png";

function Header() {
    const { setIsLogged, userLogged, setUserLogged } = useContext(UserContext);

    const logout = () => {
        setIsLogged(false);
        localStorage.setItem("isLogged", false);
        setUserLogged(null);
        localStorage.removeItem("userLogged");
    };
    const pages = [
        {
            route: "/",
            description: "Medicamentos",
        },
        {
            route: "/novomedicamento",
            description: "Cadastrar Medicamento",
        },
        {
            route: "/farmacias",
            description: "Farmácias",
        },
        {
            route: "/novafarmacia",
            description: "Cadastrar Farmácia",
        },
        {
            route: "/cadastrousuario",
            description: "Cadastrar Usuário",
        },
    ];
    return (
        <header className="pb-3">
            <nav className="navbar navbar-expand-lg bg-light px-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Logo" style={{ width: "200px" }} />
                    </a>
                    <div className="">
                        <div className="navbar-nav">
                            {pages.map((page, key) => (
                                <div className="nav-link" href="#" key={key}>
                                    <Link className="nav-link" to={page.route}>
                                        {page.description}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <span>{userLogged?.name}</span>
                    <button className="btn btn-danger" onClick={logout}>
                        Sair
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
