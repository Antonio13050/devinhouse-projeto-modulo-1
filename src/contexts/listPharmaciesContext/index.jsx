import { createContext, useState } from "react";

const ListPharmaciesContext = createContext();

const ListPharmaciesProvider = ({ children }) => {
    const [listPharmacies, setListPharmacies] = useState(
        localStorage.getItem("listPharmacies")
            ? JSON.parse(localStorage.getItem("listPharmacies"))
            : [
                  {
                      id: 1,
                      razaoSocial: "Farmácia DevinHouse Ltda.",
                      cnpj: "11.111.111/0001-11",
                      nomeFantasia: "DevinHouse Farma",
                      email: "devinhousefarma@example.com",
                      telefone: "(11) 2222-3333",
                      celular: "(11) 99999-9999",
                      endereco: {
                          cep: "01000-000",
                          logradouro: "Rua das Flores",
                          numero: "123",
                          bairro: "Centro",
                          cidade: "São Paulo",
                          estado: "SP",
                          complemento: "Sala 101",
                          geolocalizacao: {
                              latitude: -23.55052,
                              longitude: -46.633308,
                          },
                      },
                  },
                  {
                      id: 2,
                      razaoSocial: "FarmaMais Ltda.",
                      cnpj: "22.222.222/0001-22",
                      nomeFantasia: "FarmaMais",
                      email: "farmamais@example.com",
                      telefone: "(21) 3333-4444",
                      celular: "(21) 88888-8888",
                      endereco: {
                          cep: "20000-000",
                          logradouro: "Avenida Principal",
                          numero: "456",
                          bairro: "Bairro Novo",
                          cidade: "Rio de Janeiro",
                          estado: "RJ",
                          complemento: "Loja A",
                          geolocalizacao: {
                              latitude: -22.908333,
                              longitude: -43.196388,
                          },
                      },
                  },
                  {
                      id: 3,
                      razaoSocial: "Drogaria do Bem S.A.",
                      cnpj: "33.333.333/0001-33",
                      nomeFantasia: "Drogaria do Bem",
                      email: "drogariadobem@example.com",
                      telefone: "(31) 4444-5555",
                      celular: "(31) 77777-7777",
                      endereco: {
                          cep: "30000-000",
                          logradouro: "Rua das Palmeiras",
                          numero: "789",
                          bairro: "Vila Verde",
                          cidade: "Belo Horizonte",
                          estado: "MG",
                          complemento: "",
                          geolocalizacao: {
                              latitude: -19.916667,
                              longitude: -43.933333,
                          },
                      },
                  },
              ]
    );

    const addPharmacy = (data) => {
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
