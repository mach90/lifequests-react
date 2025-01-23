import { useState } from "react";
import { useLogin } from "./useLogin";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { NavLink } from "react-router-dom";

const loginTitlestyle = "text-2xl font-bold text-white";
const loginFormStyle = "flex flex-col gap-4 justify-center items-center w-full p-6";
const loginFormRowStyle = "flex flex-col gap-2 w-full";
const loginFormRow2Style = "flex flex-row gap-2 w-full px-6";
const loginFormInputStyle = "bg-stone-950 border border-gray-500 p-2 rounded-lg text-white";
const loginFormButtonSubmitStyle = "bg-variant2 hover:brightness-90 text-white text-lg font-bold px-4 py-2 rounded-lg shadow-md";
const loginFormButtonLinkStyle = "bg-slate-700 hover:brightness-90 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-md w-full text-center";

function LoginForm() {
    const [email, setEmail] = useState("john@example.com");
    const [password, setPassword] = useState("test123456");
    const {login, isPending: isLoading} = useLogin();

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
        <>
            <h2 className={loginTitlestyle}>Login</h2>
            <form onSubmit={handleSubmit} className={loginFormStyle}>
                <div className={loginFormRowStyle}>
                    <input
                        type="email"
                        id="email"
                        placeholder="E-mail address"
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
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                        className={loginFormInputStyle}
                    />
                </div> 
                <div className={loginFormRowStyle}>
                    <button disabled={isLoading} className={loginFormButtonSubmitStyle}>
                        {isLoading ? <LoadingSpinner size="sm" /> : "Login"}
                    </button>
                </div>
            </form>
            <div className={loginFormRow2Style}>
                <NavLink to="/forgot" className={loginFormButtonLinkStyle}>Forgot password</NavLink>
                <NavLink to="/register" className={loginFormButtonLinkStyle}>Register</NavLink>
            </div>
        </>
    );
};

export default LoginForm;
