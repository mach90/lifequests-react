import { useHandleChange } from "../../hooks/useHandleChange";
import { useLogin } from "./useLogin";
import { NavLink } from "react-router-dom";
import Card from "../../ui/Card";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const loginFormButtonLinkStyle = "text-main4 hover:text-neutral0 text-sm font-bold px-4 py-2 rounded-lg w-full text-center border border-main4 hover:border-neutral0 duration-200";

function LoginForm() {
    const {formData, handleChange, setFormData} = useHandleChange({
        email: "",
        password: "",
    });

    const {login, isPending, error} = useLogin();

    function handleSubmit(e) {
        e.preventDefault();

        if(!email || !password) return;

        login(formData, {
            onSuccess: () => {
                setFormData({
                    email: "",
                    password: "",
                });
            },
            onError: () => {
            setFormData({
                    email: "",
                    password: "",
                });
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
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isPending}
                        required
                    />
                </FormRow>
                <FormRow>
                    <Input
                        type="password"
                        inputName="password"
                        placeholder="******"
                        label="Password"
                        value={formData.password}
                        onChange={handleChange}
                        disabled={isPending}
                        required
                    />
                </FormRow>
                <FormRow>
                    <Button
                        type="submit" 
                        label={!isPending ? "Login" : "Authenticating..."}
                        disabled={isPending}
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
