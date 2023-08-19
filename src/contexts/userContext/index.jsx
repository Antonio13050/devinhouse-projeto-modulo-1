import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const localStorageUsers = localStorage.getItem("users");
    const [users, setUsers] = useState(
        localStorageUsers
            ? JSON.parse(localStorageUsers)
            : [
                  {
                      email: "admin@teste.com",
                      password: "abcd1234",
                  },
                  {
                      email: "antonio@teste.com",
                      password: "abcd4321",
                  },
              ]
    );

    //inicializa o localStorage
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify(users));
    }

    const localStorageIsLogged = localStorage.getItem("isLogged");

    const [isLogged, setIsLogged] = useState(
        localStorageIsLogged == "true" ? true : false
    );

    return (
        <UserContext.Provider
            value={{ users, setUsers, isLogged, setIsLogged }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
