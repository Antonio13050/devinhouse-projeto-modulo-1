import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";
import "./styles.css";
import logo from "../../assets/logo.png";

function Header() {
    const { setIsLogged } = useContext(UserContext);

    const logout = () => {
        setIsLogged(false);
        localStorage.setItem("isLogged", false);
    };
    const pages = [
        {
            route: "/",
            description: "Medications",
        },
        {
            route: "/newpharmacy",
            description: "New Pharmacy",
        },
        {
            route: "/pharmacies",
            description: "Pharmacys",
        },
    ];
    return (
        <header className="pb-3">
            <nav class="navbar navbar-expand-lg bg-light px-3">
                <div class="container-fluid">
                    <a class="navbar-brand">
                        <Link className="navbar-brand" to={"/"}>
                            <img
                                src={logo}
                                alt="Logo"
                                style={{ width: "200px" }}
                            />
                        </Link>
                    </a>
                    <div class="">
                        <div class="navbar-nav">
                            {pages.map((page, key) => (
                                <a class="nav-link">
                                    <Link
                                        className="nav-link"
                                        key={key}
                                        to={page.route}
                                    >
                                        {page.description}
                                    </Link>
                                </a>
                            ))}
                        </div>
                    </div>
                    <button className="btn btn-danger" onClick={logout}>
                        Sair
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
