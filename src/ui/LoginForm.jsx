import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("itsmach90@gmail.com");
    const [password, setPassword] = useState("abcd123456");

    const isLoading = false;

    function handleSubmit(e) {
        e.preventDefault();
        if(!email || !password) return;
        // login({email, password}, {
        //     onSettled: () => {
        //         setEmail("");
        //         setPassword("");
        //     }
        // });
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    id="email"
                    // This makes this form better for password managers
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                />
                <span>Error span</span>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password">Password</label>
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
                <button disabled={isLoading}>{!isLoading ? "Log in" : "Spinning"}</button>
            </div>
        </form>
    );
};

export default LoginForm;
