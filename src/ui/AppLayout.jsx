/* //////////////////////////////////////////////////
IMPORT - REACT ROUTER DOM OUTLET
To display child routes
////////////////////////////////////////////////// */
import { Outlet } from "react-router-dom";

/* //////////////////////////////////////////////////
IMPORT - UI
////////////////////////////////////////////////// */
import Header from "./Header";

/* //////////////////////////////////////////////////
APPLAYOUT UI COMPONENT
////////////////////////////////////////////////// */
function AppLayout() {
    return (
        <main className="bg-background flex flex-col p-6 gap-6 h-screen max-w-screen">
            <Header />
            <main className="bg-container flex-1 overflow-hidden rounded-md">
                <Outlet />
            </main>
        </main>
    );
}

export default AppLayout;