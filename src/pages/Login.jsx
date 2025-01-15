import { useState } from "react";
import LoginForm from "../features/authentication/LoginForm";
import SignupForm from "../features/authentication/SignupForm";

function Login() {
    const [form, setForm] = useState("login-form");

    return (
        <main className="bg-background bg-cover bg-no-repeat flex flex-row p-6 gap-6 h-screen max-w-screen">

            <div className="flex flex-col justify-center items-center overflow-hidden w-[70%]">
                <h1 className="text-7xl font-black text-white">LifeQuests</h1>
                <p className="text-xl font-black text-white">Gamify your skill learning</p>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center bg-container w-[30%] p-6 rounded-lg">
                <div className="flex flex-row gap-4">
                    <button onClick={() => setForm("login-form")} className="border-b-2 border-[#474646] hover:border-[#a9a9a5] text-[#474646] hover:text-[#a9a9a5]">Login</button>
                    <button onClick={() => setForm("signup-form")} className="border-b-2 border-[#474646] hover:border-[#a9a9a5] text-[#474646] hover:text-[#a9a9a5]">Signup</button>
                </div>
                {form === "login-form" && <LoginForm />}
                {form === "signup-form" && <SignupForm />}
            </div>
            
        </main>
    );
};

export default Login;