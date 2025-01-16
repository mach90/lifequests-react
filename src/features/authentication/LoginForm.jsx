import { useState } from "react";
import { useLogin } from "./useLogin";

const loginFormStyle = "flex flex-col gap-4 justify-center items-center w-max p-6";
const loginFormRowStyle = "flex flex-col gap-2";
const loginFormInputStyle = "bg-white border-2 border-[#e3e2dc] p-2 rounded-lg text-[#474646]";
const loginFormButtonStyle = "bg-slate-700 hover:bg-variant1 text-white font-bold px-4 py-2 rounded-lg shadow-md"

function LoginForm() {
    const [email, setEmail] = useState("john@example.com");
    const [password, setPassword] = useState("test1234");
    const {login, isLoading} = useLogin();

    function handleSubmit(e) {
        e.preventDefault();
        if(!email || !password) return;
        login({email, password}, {
          onSettled: () => {
            setEmail("");
            setPassword("");
          }
        });
    }

    return (
        <form onSubmit={handleSubmit} className={loginFormStyle}>
            <div className={loginFormRowStyle}>
                <input
                    type="email"
                    id="email"
                    placeholder="Email address"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    className={loginFormInputStyle}
                />
            </div>
            <div className={loginFormRowStyle}>
                <input
                    type="password"
                    id="password"
                    placeholder="*****"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    className={loginFormInputStyle}
                />
            </div> 
            <div className={loginFormRowStyle}>
                <button disabled={isLoading} className={loginFormButtonStyle}>
                    {!isLoading ? "Log in" : "Loading..."}
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
