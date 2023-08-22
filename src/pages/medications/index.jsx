import React from "react";
import Header from "../../components/header";
import { ListMedicineContext } from "../../contexts/medicineContext";
import { useContext } from "react";
import "./styles.css";
import img from "../../assets/img.jpg";

function Medications() {
    const { listMedicine } = useContext(ListMedicineContext);
    console.log(listMedicine);

    return (
        <div>
            <Header />
            <div className="container">
                <h2>Medicamentos</h2>
                <div className="box-container">
                    {listMedicine.map((medicine, index) => (
                        <div className="box" key={index}>
                            <div className="card text-center">
                                <img
                                    src={img}
                                    className="card-img"
                                    alt={`Imagem do medicamento ${medicine.name}`}
                                />
                                <div className="card-body">
                                    <h4 className="card-title">
                                        {medicine.name}
                                    </h4>
                                    <h5 className="card-text">
                                        Laboratório: {medicine.laboratory}
                                    </h5>
                                    <h5 className="card-text">
                                        Dosagem: {medicine.dosage}
                                    </h5>
                                    <h5 className="card-text">
                                        Tipo: {medicine.type}
                                    </h5>
                                    <h5 className="card-text">
                                        R$ {medicine.price}
                                    </h5>
                                    <p className="card-description">
                                        {medicine.description}
                                    </p>
                                    <a href="">Mais informações</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Medications;
