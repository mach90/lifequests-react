import LoginForm from "../ui/LoginForm";

function Login() {
    return (
        <main className="bg-stone-800 flex flex-row p-6 gap-6 h-screen max-w-screen">
            <div className="bg-red-900 flex flex-col justify-center items-center overflow-hidden w-[60%]">
                <h1>LifeQuests</h1>
                <p>Slogan not yet determined</p>
            </div>
            <LoginForm />
        </main>
    );
};

export default Login;