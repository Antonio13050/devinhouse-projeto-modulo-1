import { PublicRoutes } from "./publicRoutes";
import { PrivateRoutes } from "./privateRoutes";

function RoutesApp() {
    const user = false;

    if (user) {
        return <PrivateRoutes />;
    }
    return <PublicRoutes />;
}

export { RoutesApp };
