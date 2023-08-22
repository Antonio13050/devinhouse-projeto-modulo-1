import { RoutesApp } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";
import { ListPharmaciesProvider } from "./contexts/listPharmaciesContext";
import { ListMedicineProvider } from "./contexts/medicineContext";

import "leaflet/dist/leaflet.css";

function App() {
    return (
        <BrowserRouter>
            <ListMedicineProvider>
                <ListPharmaciesProvider>
                    <UserProvider>
                        <RoutesApp />
                    </UserProvider>
                </ListPharmaciesProvider>
            </ListMedicineProvider>
        </BrowserRouter>
    );
}
export default App;
