import { RoutesApp } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";

function App() {
    return (
        <BrowserRouter>
            <UserProvider>
                <RoutesApp />
            </UserProvider>
        </BrowserRouter>
    );
}
export default App;
