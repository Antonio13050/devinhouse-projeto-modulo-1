import { Route, Routes } from "react-router-dom";
import Medications from "../pages/medications";
import NewPharmacy from "../pages/newPharmacy";
import Pharmacies from "../pages/pharmacies";
import NewMedication from "../pages/newMedication";
import MedicationDetails from "../pages/medicationDetails";

function PrivateRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Medications />} />
            <Route path="/newpharmacy" element={<NewPharmacy />} />
            <Route path="/pharmacies" element={<Pharmacies />} />
            <Route path="/novomedicamento" element={<NewMedication />} />
            <Route path="medicamento/:id" element={<MedicationDetails />} />
            <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
    );
}

export { PrivateRoutes };
