import { Outlet } from "react-router-dom";
import Header from "./Header";

const appLayoutContainerStyle = "bg-background flex flex-col p-5 gap-2.5 h-screen max-w-screen";
const appLayoutMainStyle = "flex-1 overflow-hidden";

function AppLayout() {
    return (
        <main className={appLayoutContainerStyle}>
            <Header />
            <main className={appLayoutMainStyle}>
                <Outlet />
            </main>
        </main>
    );
}

export default AppLayout;