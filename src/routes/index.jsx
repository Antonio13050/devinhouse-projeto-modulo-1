import { PublicRoutes } from "./publicRoutes";
import { PrivateRoutes } from "./privateRoutes";
import { UserContext } from "../contexts/userContext";
import { useContext } from "react";

function RoutesApp() {
    const { isLogged } = useContext(UserContext);
    if (isLogged == false) {
        return <PublicRoutes />;
    }
    return <PrivateRoutes />;
}

export { RoutesApp };
