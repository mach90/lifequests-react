import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSignup } from "./useSignup";
import LoadingSpinner from "../../ui/LoadingSpinner";
import Card from "../../ui/Card";
import FormRow from "../../ui/FormRow";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const signupFormInputStyle = "bg-stone-950 border border-gray-500 p-2 rounded-lg text-white";
const signupFormButtonSubmitStyle = "bg-variant2 disabled:bg-gray-800 disabled:cursor-not-allowed hover:bg-variant1 text-white font-bold px-4 py-2 rounded-lg shadow-md";
const signupFormButtonLinkStyle = "bg-slate-700 hover:brightness-90 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-md w-full text-center";

function SignupForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const {signup, isPending: isLoading} = useSignup();

    function handleSubmit(e) {
        e.preventDefault();
        if(!name || !email || !password || !passwordConfirm) return;
        signup({name, email, password, passwordConfirm}, {
          onSettled: () => {
            setName("");
            setEmail("");
            setPassword("");
            setPasswordConfirm("");
          }
        });
    }

    return (
        <Card title="Create an account">
            <Form onSubmit={handleSubmit}>
                <FormRow>
                    <Input
                        type="text"
                        inputName="name"
                        placeholder="Username"
                        label="Character name"
                        autoComplete="username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={isLoading}
                    />
                </FormRow>
                <FormRow>
                    <Input
                        type="email"
                        inputName="email"
                        placeholder="Email"
                        label="Your email (contact & login)"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        className={signupFormInputStyle}
                    />
                </FormRow>
                <FormRow>
                    <Input
                        type="password"
                        placeholder="******"
                        autoComplete="new-password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                        className={signupFormInputStyle}
                    />
                </FormRow>
                <FormRow>
                    <Input
                        type="password"
                        placeholder="******"
                        autoComplete="new-password"
                        label="Confirm Password"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        disabled={isLoading}
                        className={signupFormInputStyle}
                    />
                </FormRow>
                <FormRow>
                    <p className="text-neutral0">I agree to the terms and conditions</p>
                    <Input 
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                        className={signupFormInputStyle}
                    />
                </FormRow>
                <FormRow>
                    <Button 
                        type="submit"
                        label={!isLoading ? "Create account" : "Registering..."}
                        disabled={isLoading || !isChecked}
                    />
                </FormRow>
                <FormRow>
                    <NavLink to="/login" className={signupFormButtonLinkStyle}>Already registered ?</NavLink>
                </FormRow>
            </Form>
        </Card>
    );
};

export default SignupForm;