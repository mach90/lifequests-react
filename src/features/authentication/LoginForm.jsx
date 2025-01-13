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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center items-center bg-gray-950 w-[30%] p-6">
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xl font-bold text-gray-300">Email address</label>
                <input
                    type="email"
                    id="email"
                    // This makes this form better for password managers
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                />
                {/* <span>Error span</span> */}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-xl font-bold text-gray-300">Password</label>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                />
                {/* {error && <span className="text-red-400">{error}</span>} */}
            </div> 
            <div className="flex flex-col gap-2">
                <button disabled={isLoading} className="bg-blue-700 text-gray-100 p-2 rounded-xl hover:bg-blue-600">{!isLoading ? "Log in" : "Spinning"}</button>
            </div>
        </form>
    );
};

export default LoginForm;
