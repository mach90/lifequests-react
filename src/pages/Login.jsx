import LoginForm from "../features/authentication/LoginForm";

function Login() {
    return (
        <main className="bg-[url('/background-login.jpg')] bg-cover bg-no-repeat flex flex-row p-6 gap-6 h-screen max-w-screen">
            <div className="flex flex-col justify-center items-center overflow-hidden w-[70%]">
                <h1 className="text-7xl font-black text-gray-950">LifeQuests</h1>
                <p className="text-xl font-black text-gray-950">Gamify your skill learning</p>
            </div>
            <LoginForm />
        </main>
    );
};

export default Login;