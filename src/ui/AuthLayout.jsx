const authContainerStyle = "bg-background bg-cover bg-no-repeat flex flex-row p-6 gap-6 h-screen max-w-screen";

function AuthLayout({children}) {
    return (
        <main className={authContainerStyle}>
            {children}
        </main>
    );
};

export default AuthLayout;
