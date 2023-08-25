import React from "react";
import Header from "../../components/header";
import { ListMedicineContext } from "../../contexts/medicineContext";
import { useContext } from "react";
import "./styles.css";
import img from "../../assets/img.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Medications() {
    const { listMedicine } = useContext(ListMedicineContext);

    const [filterMedicine, setFilterMedicine] = useState("");
    const [listFilteredMedicine, setListFilteredMedicine] = useState([]);

    const [error, setError] = useState(false);

    const handleFilter = (e) => {
        const value = e.target.value;
        setFilterMedicine(value);
        const filteredMedicine = listMedicine.filter((medicine) =>
            medicine.name.toLowerCase().includes(value.toLowerCase())
        );
        setListFilteredMedicine(filteredMedicine);
        if (value.length > 0 && filteredMedicine.length === 0) {
            setError("Nenhum medicamento foi encontrado");
        } else {
            setError(null);
        }
    };

    return (
        <div>
            <Header />
            <div className="container">
                <h2>Medicamentos</h2>
                <input
                    type="text"
                    placeholder="Pesquisar"
                    className="form-control my-3"
                    onChange={handleFilter}
                    value={filterMedicine}
                />
                {error && (
                    <div>
                        <h4>{error}</h4>
                        <h5>Confira a lista com todos os medicamentos</h5>
                    </div>
                )}
                <div className="box-container">
                    {listFilteredMedicine.length > 0
                        ? listFilteredMedicine.map((medicine, index) => (
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
                                          <Link
                                              to={`/medicamento/${medicine.id}`}
                                          >
                                              Mais detalhes
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                          ))
                        : listMedicine.map((medicine, index) => (
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
                                          <Link
                                              to={`/medicamento/${medicine.id}`}
                                          >
                                              Mais detalhes
                                          </Link>
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
