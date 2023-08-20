import { createContext, useState } from "react";

const ListPharmaciesContext = createContext();

const ListPharmaciesProvider = ({ children }) => {
    const [listPharmacies, setListPharmacies] = useState([
        {
            id: 1,
            name: "teste",
        },
    ]);
    return (
        <ListPharmaciesContext.Provider
            value={{ listPharmacies, setListPharmacies }}
        >
            {children}
        </ListPharmaciesContext.Provider>
    );
};

export { ListPharmaciesContext, ListPharmaciesProvider };
