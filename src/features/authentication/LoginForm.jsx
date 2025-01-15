import { useState } from "react";
import { useLogin } from "./useLogin";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login, isLoading} = useLogin();

    function handleSubmit(e) {
        e.preventDefault();
        if(!email || !password) return;
        login({email, password}, {
          onSettled: () => {
            // setEmail("");
            setPassword("");
          }
        });
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center items-center w-max p-6">
            <div className="flex flex-col gap-2">
                <input
                    type="email"
                    id="email"
                    placeholder="Email address"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    className="bg-white border-2 border-[#e3e2dc] p-2 rounded-lg text-[#474646]"
                />
            </div>
            <div className="flex flex-col gap-2">
                <input
                    type="password"
                    id="password"
                    placeholder="*****"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    className="bg-white border-2 border-[#e3e2dc] p-2 rounded-lg text-[#474646]"
                />
            </div> 
            <div className="flex flex-col gap-2">
                <button disabled={isLoading} className="bg-slate-700 hover:bg-variant1 text-white font-bold px-4 py-2 rounded-lg shadow-md">{!isLoading ? "Log in" : "Spinning"}</button>
            </div>
        </form>
    );
};

export default LoginForm;
