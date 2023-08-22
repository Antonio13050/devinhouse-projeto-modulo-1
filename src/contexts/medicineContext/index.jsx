import { createContext, useState } from "react";

const ListMedicineContext = createContext();

const ListMedicineProvider = ({ children }) => {
    const [listMedicine, setListMedicine] = useState(
        localStorage.getItem("listMedicine")
            ? JSON.parse(localStorage.getItem("listMedicine"))
            : [
                  {
                      id: 1,
                      name: "Medicamento 1",
                      laboratory: "Laboratório 1",
                      dosage: "Dosagem 1",
                      type: "Tipo 1",
                      price: "Preço 1",
                      description: "Descrição 1",
                  },
                  {
                      id: 2,
                      name: "Medicamento 2",
                      laboratory: "Laboratório 2",
                      dosage: "Dosagem 2",
                      type: "Tipo 2",
                      price: "Preço 2",

                      description: "Descrição 2",
                  },
              ]
    );
    const addMedicine = (medicine) => {
        console.log(medicine);
    };
    return (
        <ListMedicineContext.Provider value={{ listMedicine, addMedicine }}>
            {children}
        </ListMedicineContext.Provider>
    );
};

export { ListMedicineContext, ListMedicineProvider };