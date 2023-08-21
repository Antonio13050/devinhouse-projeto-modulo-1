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

            <div className="container">
                <h1>Farmácias</h1>
                <div>
                    {listPharmacies.map((pharmacy) => (
                        <div key={pharmacy.id}>
                            <h4>{pharmacy.nomeFantasia}</h4>
                            <div className="row">
                                <span className="col-4">
                                    Razão social: {pharmacy.razaoSocial}
                                </span>
                                <span className="col-6">
                                    CNPJ: {pharmacy.cnpj}
                                </span>

                                <span className="col-4">
                                    E-mail: {pharmacy.email}
                                </span>
                                {pharmacy.telefone && (
                                    <span className="col-4">
                                        Telefone: {pharmacy.telefone}
                                    </span>
                                )}
                                <span className="col-4">
                                    Celular: {pharmacy.celular}
                                </span>
                                <p className="mt-2">Endereço:</p>
                                <span>CEP: {pharmacy.endereco.cep}</span>
                                <span className="col-4">
                                    Logradouro: {pharmacy.endereco.logradouro}
                                </span>
                                <span className="col-4">
                                    Número: {pharmacy.endereco.numero}
                                </span>
                                <span className="col-4">
                                    Bairro: {pharmacy.endereco.bairro}
                                </span>
                                <span className="col-4">
                                    Cidade: {pharmacy.endereco.cidade}
                                </span>
                                <span className="col-4">
                                    Estado: {pharmacy.endereco.estado}
                                </span>
                                {pharmacy.endereco.complemento && (
                                    <span className="col-4">
                                        Complemento:{" "}
                                        {pharmacy.endereco.complemento}
                                    </span>
                                )}
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Pharmacies;
