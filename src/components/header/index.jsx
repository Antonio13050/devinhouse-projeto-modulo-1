import React from "react";
import { Link } from "react-router-dom";

function Header() {
    const pages = [
        {
            route: "/",
            description: "Medications",
        },
        {
            route: "/newpharmacy",
            description: "New Pharmacy",
        },
    ];
    return (
        <header>
            {pages.map((page) => (
                <Link to={page.route}>{page.description}</Link>
            ))}
        </header>
    );
}

export default Header;
