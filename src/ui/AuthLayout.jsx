const authContainerStyle = "bg-[url(/background-login2.avif)] bg-cover bg-center flex flex-row p-6 gap-6 h-screen max-w-screen";

function AuthLayout({children}) {
    return (
        <main className={authContainerStyle}>
            {children}
        </main>
    );
};

export default AuthLayout;
