import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "./useLogin";
import LoadingSpinner from "../../ui/LoadingSpinner";
import Card from "../../ui/Card";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const loginFormButtonLinkStyle = "text-main4 hover:text-neutral0 text-sm font-bold px-4 py-2 rounded-lg w-full text-center border border-main4 hover:border-neutral0 duration-200";

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
        <Card title="Login">
            <Form onSubmit={handleSubmit}>
                <FormRow>
                    <Input 
                        type="email"
                        inputName="email"
                        placeholder="Email"
                        label="Email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                    />
                </FormRow>
                <FormRow>
                    <Input
                        type="password"
                        inputName="passwordCurrent"
                        placeholder="******"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                        required
                    />
                </FormRow>
                <FormRow>
                    <Button
                        type="submit" 
                        label={!isLoading ? "Login" : "Authenticating..."}
                        disabled={isLoading}
                    />
                </FormRow>
                <FormRow>
                    <NavLink to="/forgot" className={loginFormButtonLinkStyle}>Forgot password</NavLink>
                    <NavLink to="/register" className={loginFormButtonLinkStyle}>Register</NavLink>
                </FormRow>
            </Form>
        </Card>
    );
};

export default LoginForm;
