import { Route, Routes } from "react-router-dom";
import Medications from "../pages/medications";

function PrivateRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Medications />} />
            <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
    );
}

export { PrivateRoutes };
