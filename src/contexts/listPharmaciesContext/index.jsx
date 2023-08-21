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

    const addPharmacy = (data) => {
        console.log(data);
        const newPharmacy = {
            id: listPharmacies.length + 1,
            razaoSocial: data.razaoSocial,
            cnpj: data.cnpj,
            nomeFantasia: data.nomeFantasia,
            email: data.email,
            telefone: data.telefone,
            celular: data.celular,
            endereco: {
                cep: data.endereco.cep,
                logradouro: data.endereco.logradouro,
                numero: data.endereco.numero,
                bairro: data.endereco.bairro,
                cidade: data.endereco.cidade,
                estado: data.endereco.estado,
                complemento: data.endereco.complemento,
                geolocalizacao: {
                    latitude: data.geolocalizacao.latitude,
                    longitude: data.geolocalizacao.longitude,
                },
            },
        };
        console.log(newPharmacy);
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
