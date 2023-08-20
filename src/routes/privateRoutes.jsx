import { Route, Routes } from "react-router-dom";
import Medications from "../pages/medications";
import NewPharmacy from "../pages/newPharmacy";

function PrivateRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Medications />} />
            <Route path="/newpharmacy" element={<NewPharmacy />} />
            <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
    );
}

export { PrivateRoutes };
