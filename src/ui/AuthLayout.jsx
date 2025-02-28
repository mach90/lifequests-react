import { Outlet } from "react-router-dom";

const authLayoutContainerStyle = "bg-[url(/background-login2.avif)] bg-cover bg-center flex flex-row p-6 gap-6 h-screen max-w-screen";
const authLayoutMainStyle = "flex-1 overflow-hidden";

function AuthLayout() {
    return (
        <main className={authLayoutContainerStyle}>
            <main className={authLayoutMainStyle}>
                <Outlet />
            </main>
        </main>
    );
};

export default AuthLayout;