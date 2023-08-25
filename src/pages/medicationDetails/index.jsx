import React from "react";
import Header from "../../components/header";
import { useParams } from "react-router-dom";
import { ListMedicineContext } from "../../contexts/medicineContext";
import { useContext } from "react";
import img from "../../assets/img.jpg";

function MedicationDetails() {
    const { id } = useParams();
    const { listMedicine } = useContext(ListMedicineContext);

    const medicineSelected = listMedicine.find((medicine) => {
        return medicine.id === Number(id);
    });

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src={img} className="img-fluid" alt="" />
                    </div>
                    <div className="col-6">
                        <h2>{medicineSelected.name}</h2>
                        <h4>Laboratório: {medicineSelected.laboratory}</h4>
                        <h4>Dosagem: {medicineSelected.dosage}</h4>
                        <h4>Tipo: {medicineSelected.type}</h4>
                        <h3>Preço: {medicineSelected.price}</h3>
                    </div>
                    <div className="col-12">
                        <h2>Descrição do medicamento</h2>
                        <p>{medicineSelected.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MedicationDetails;
