import React from "react";
import Header from "../../components/header";
import { ListPharmaciesContext } from "../../contexts/listPharmaciesContext";
import { useContext } from "react";

function Pharmacies() {
    const { listPharmacies, setListPharmacies, addPharmacy } = useContext(
        ListPharmaciesContext
    );
    console.log(listPharmacies);

    return (
        <div>
            <Header />
            {listPharmacies.map((pharmacy) => (
                <div key={pharmacy.id}>
                    {pharmacy.razaoSocial}
                    {pharmacy.cnpj}
                </div>
            ))}
        </div>
    );
}

export default Pharmacies;
