import { useState } from "react";
import { useHandleChange } from "../../hooks/useHandleChange";
import { useSignup } from "./useSignup";
import { NavLink } from "react-router-dom";
import Card from "../../ui/Card";
import FormRow from "../../ui/FormRow";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormError from "../../ui/FormError";

const signupFormButtonLinkStyle = "text-main4 hover:text-neutral0 text-sm font-bold px-4 py-2 rounded-lg w-full text-center border border-main4 hover:border-neutral0 duration-200";

function SignupForm() {
    const {formData, handleChange, setFormData} = useHandleChange({
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });

    const [isChecked, setIsChecked] = useState(false);

    const {signup, isPending, error} = useSignup();

    function handleSubmit(e) {
        e.preventDefault();
        
        if(!formData.name || !formData.email || !formData.password || !formData.passwordConfirm) return;
        if(formData.password !== formData.passwordConfirm) return;

        signup(formData, {
            onSuccess: () => {
                setFormData({ 
                    name: "", 
                    email: "", 
                    password: "", 
                    passwordConfirm: "" 
                });
                setIsChecked(false);
            },
            onError: () => {
                setFormData((prev) => ({
                    ...prev,
                    password: "",
                    passwordConfirm: ""
                }));
                setIsChecked(false);
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
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isPending}
                        required
                    />
                </FormRow>
                <FormRow>
                    <Input
                        type="email"
                        inputName="email"
                        placeholder="Email"
                        label="Your email (contact & login)"
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
                        autoComplete="new-password"
                        label="Password"
                        value={formData.password}
                        onChange={handleChange}
                        disabled={isPending}
                    />
                </FormRow>
                <FormRow>
                    <Input
                        type="password"
                        inputName="passwordConfirm"
                        placeholder="******"
                        autoComplete="new-password"
                        label="Confirm Password"
                        value={formData.passwordConfirm}
                        onChange={handleChange}
                        disabled={isPending}
                    />
                </FormRow>
                <FormRow>
                    <p className="text-neutral0">I agree to the terms and conditions</p>
                    <Input 
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                    />
                </FormRow>
                <FormRow>
                    <Button 
                        type="submit"
                        label={!isPending ? "Create account" : "Please wait"}
                        disabled={isPending || !isChecked}
                    />
                </FormRow>
                <FormRow>
                    <FormError error={error} />
                </FormRow>
                <FormRow>
                    <NavLink to="/login" className={signupFormButtonLinkStyle}>Already registered ?</NavLink>
                </FormRow>
            </Form>
        </Card>
    );
};

export default SignupForm;