import { useState } from "react";
import LoginForm from "../features/authentication/LoginForm";
import SignupForm from "../features/authentication/SignupForm";

const loginContainerStyle = "bg-background bg-cover bg-no-repeat flex flex-row p-6 gap-6 h-screen max-w-screen";
const loginTitlePanelStyle = "flex flex-col justify-center items-center overflow-hidden w-[70%]";
const loginTitleStyle = "text-7xl font-black text-white";
const loginSubtitleStyle = "text-xl font-black text-white";
const loginFormPanelStyle = "flex flex-col gap-4 justify-center items-center bg-container w-[30%] p-6 rounded-lg";
const loginFormNavStyle = "flex flex-row gap-4";
const loginFormNavButtonStyle = "border-b-2 border-[#474646] hover:border-[#a9a9a5] text-[#474646] hover:text-[#a9a9a5]";

function Login() {
    const [form, setForm] = useState("login-form");

    return (
        <main className={loginContainerStyle}>
            <div className={loginTitlePanelStyle}>
                <h1 className={loginTitleStyle}>LifeQuests</h1>
                <h2 className={loginSubtitleStyle}>Gamify your skill learning</h2>
            </div>
            <div className={loginFormPanelStyle}>
                <div className={loginFormNavStyle}>
                    <button onClick={() => setForm("login-form")} className={loginFormNavButtonStyle}>Login</button>
                    <button onClick={() => setForm("signup-form")} className={loginFormNavButtonStyle}>Signup</button>
                </div>
                {form === "login-form" && <LoginForm />}
                {form === "signup-form" && <SignupForm />}
            </div>
        </main>
    );
};

export default Login;