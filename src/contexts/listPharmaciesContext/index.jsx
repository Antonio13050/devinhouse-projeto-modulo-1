import { createContext, useState } from "react";

const ListPharmaciesContext = createContext();

const ListPharmaciesProvider = ({ children }) => {
    const [listPharmacies, setListPharmacies] = useState(
        localStorage.getItem("listPharmacies")
            ? JSON.parse(localStorage.getItem("listPharmacies"))
            : [
                  {
                      id: 1,
                      razaoSocial: "Farmácia",
                      cnpj: "11.111.111/1111-11",
                      nomeFantasia: "Farmácia",
                      email: "farmacia1@example.com",
                      telefone: "(11) 11111-1111",
                      celular: "(11) 11111-1111",
                      endereco: {
                          cep: "11111-111",
                          logradouro: "rua 1",
                          numero: "1",
                          bairro: "bairro 1",
                          cidade: "cidade 1",
                          estado: "estado 1",
                          complemento: "complemento 1",
                          geolocalizacao: {
                              latitude: 0,
                              longitude: 0,
                          },
                      },
                  },
              ]
    );

    const addPharmacy = ({
        razaoSocial,
        cnpj,
        nomeFantasia,
        email,
        telefone,
        celular,
        endereco,
        cep,
        logradouro,
        numero,
        bairro,
        cidade,
        estado,
        complemento,
        geolocalizacao,
        latitude,
        longitude,
    }) => {
        // if (!razaoSocial) {
        //     alert("Razão social não informada");
        //     return;
        // }
        // if (!cnpj) {
        //     alert("CNPJ não informado");
        //     return;
        // }
        // if (!nomeFantasia) {
        //     alert("Nome fantasia não informado");
        //     return;
        // }
        // if (!email) {
        //     alert("Email não informado");
        //     return;
        // }

        // if (!celular) {
        //     alert("Celular não informado");
        //     return;
        // }
        // if (!cep) {
        //     alert("CEP não informado");
        //     return;
        // }
        // if (!logradouro) {
        //     alert("Logradouro não informado");
        //     return;
        // }
        // if (!numero) {
        //     alert("Número não informado");
        //     return;
        // }
        // if (!bairro) {
        //     alert("Bairro não informado");
        //     return;
        // }
        // if (!cidade) {
        //     alert("Cidade não informado");
        //     return;
        // }
        // if (!estado) {
        //     alert("Estado não informado");
        //     return;
        // }
        // if (!latitude) {
        //     alert("Latitude não informado");
        //     return;
        // }
        // if (!longitude) {
        //     alert("Longitude não informado");
        //     return;
        // }
        const newPharmacy = {
            id: listPharmacies.length + 1,
            razaoSocial,
            cnpj,
            nomeFantasia,
            email,
            telefone,
            celular,
            endereco: {
                cep,
                logradouro,
                numero,
                bairro,
                cidade,
                estado,
                complemento,
                geolocalizacao: {
                    latitude,
                    longitude,
                },
            },
        };

        const newListPharmacies = [...listPharmacies, newPharmacy];
        setListPharmacies(newListPharmacies);
        localStorage.setItem(
            "listPharmacies",
            JSON.stringify(newListPharmacies)
        );
        alert("Cadastrado com sucesso");
    };

    return (
        <ListPharmaciesContext.Provider
            value={{ listPharmacies, setListPharmacies, addPharmacy }}
        >
            {children}
        </ListPharmaciesContext.Provider>
    );
};

export { ListPharmaciesContext, ListPharmaciesProvider };
