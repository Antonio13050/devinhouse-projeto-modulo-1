import React from "react";
import Header from "../../components/header";
import { ListPharmaciesContext } from "../../contexts/listPharmaciesContext";
import { useContext } from "react";

function NewPharmacy() {
    const { listPharmacies, setListPharmacies } = useContext(
        ListPharmaciesContext
    );
    console.log(listPharmacies);

    return (
        <div>
            <Header />
            NewPharmacy
            {listPharmacies.map((pharmacy) => (
                <div key={pharmacy.id}>{pharmacy.name}</div>
            ))}
        </div>
    );
}

export default NewPharmacy;
