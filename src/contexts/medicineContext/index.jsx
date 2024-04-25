import { createContext, useState } from "react";

const ListMedicineContext = createContext();

const ListMedicineProvider = ({ children }) => {
    const [listMedicine, setListMedicine] = useState(
        localStorage.getItem("listMedicine")
            ? JSON.parse(localStorage.getItem("listMedicine"))
            : [
                  {
                      id: 1,
                      name: "Paracetamol",
                      laboratory: "Laboratório 1",
                      dosage: "Dosagem 1",
                      type: "Tipo 1",
                      price: "3,99",
                      description:
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                  },
                  {
                      id: 2,
                      name: "Ibuprofeno",
                      laboratory: "Laboratório 2",
                      dosage: "Dosagem 2",
                      type: "Tipo 2",
                      price: "4,99",
                      description:
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                  },
                  {
                      id: 3,
                      name: "Aspirina",
                      laboratory: "Laboratório 3",
                      dosage: "Dosagem 3",
                      type: "Tipo 3",
                      price: "2,50",
                      description: "Descrição do medicamento Aspirina.",
                  },
                  {
                      id: 4,
                      name: "Dipirona",
                      laboratory: "Laboratório 4",
                      dosage: "Dosagem 4",
                      type: "Tipo 4",
                      price: "3,75",
                      description: "Descrição do medicamento Dipirona.",
                  },
              ]
    );
    const addMedicine = (medicine) => {
        const newMedicine = {
            id: listMedicine.length + 1,
            name: medicine.name,
            laboratory: medicine.laboratory,
            dosage: medicine.dosage,
            type: medicine.type,
            price: medicine.price,
            description: medicine.description,
        };
        const newListMedicine = [...listMedicine, newMedicine];
        setListMedicine(newListMedicine);
        localStorage.setItem("listMedicine", JSON.stringify(newListMedicine));
        alert("Cadastrado com sucesso");
    };
    return (
        <ListMedicineContext.Provider value={{ listMedicine, addMedicine }}>
            {children}
        </ListMedicineContext.Provider>
    );
};

export { ListMedicineContext, ListMedicineProvider };
