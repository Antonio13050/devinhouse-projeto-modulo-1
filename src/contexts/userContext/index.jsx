import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const localStorageUsers = localStorage.getItem("users");
    const [users, setUsers] = useState(
        localStorageUsers
            ? JSON.parse(localStorageUsers)
            : [
                  {
                      id: 1,
                      name: "Admin",
                      email: "admin@teste.com",
                      password: "abcd1234",
                  },
                  {
                      id: 2,
                      name: "Antonio",
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

    const localStorageUserLogged = localStorage.getItem("userLogged");
    const [userLogged, setUserLogged] = useState(
        localStorageUserLogged ? JSON.parse(localStorageUserLogged) : null
    );

    const addUser = (user) => {
        const newUser = {
            id: users.length + 1,
            name: user.name,
            email: user.email,
            password: user.password,
        };
        const newListUsers = [...users, newUser];
        setUsers(newListUsers);
        localStorage.setItem("users", JSON.stringify(newListUsers));
        alert("Cadastrado com sucesso");
    };
    console.log(users);

    return (
        <UserContext.Provider
            value={{
                users,
                setUsers,
                isLogged,
                setIsLogged,
                addUser,
                userLogged,
                setUserLogged,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
