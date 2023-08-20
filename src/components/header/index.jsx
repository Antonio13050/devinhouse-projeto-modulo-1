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
        {
            route: "/pharmacies",
            description: "Pharmacys",
        },
    ];
    return (
        <header>
            {pages.map((page, key) => (
                <Link key={key} to={page.route}>
                    {page.description}
                </Link>
            ))}
        </header>
    );
}

export default Header;
