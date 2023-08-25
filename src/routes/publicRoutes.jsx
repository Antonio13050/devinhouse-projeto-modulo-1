import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import UserRegistration from "../pages/userRegistration";

function PublicRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Login />} />
        </Routes>
    );
}

export { PublicRoutes };
