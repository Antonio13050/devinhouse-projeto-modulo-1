import { RoutesApp } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";
import { ListPharmaciesProvider } from "./contexts/listPharmaciesContext";
import "leaflet/dist/leaflet.css";

function App() {
    return (
        <BrowserRouter>
            <ListPharmaciesProvider>
                <UserProvider>
                    <RoutesApp />
                </UserProvider>
            </ListPharmaciesProvider>
        </BrowserRouter>
    );
}
export default App;
