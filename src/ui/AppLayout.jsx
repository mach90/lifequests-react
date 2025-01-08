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
        <main className="bg-stone-800 flex flex-col p-6 gap-6 h-screen max-w-screen">
            <Header />
            <main className="bg-red-900 flex-1 overflow-hidden">
                <Outlet />
            </main>
        </main>
    );
}

export default AppLayout;