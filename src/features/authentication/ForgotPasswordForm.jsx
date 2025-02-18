import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForgotPassword } from "./useForgotPassword";
import Card from "../../ui/Card";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

const forgotFormButtonLinkStyle = "text-main4 hover:text-neutral0 text-sm font-bold px-4 py-2 rounded-lg w-full text-center border border-main4 hover:border-neutral0 duration-200";


function ForgotPasswordForm() {
    const [email, setEmail] = useState("");
    const {forgotPassword, isPending: isLoading} = useForgotPassword();

    function handleSubmit(e) {
        e.preventDefault();
        if(!email) return;
        forgotPassword({email}, {
            onSettled: () => {
                setEmail("");
            }
        });
    }
    
    return (
        <Card title="Forgot Password">
            <Form onSubmit={handleSubmit}>
                <FormRow>
                    <Input
                        type="email"
                        inputName="email"
                        placeholder="Email"
                        label="Enter the email associated with your account:"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                    />
                </FormRow>
                <FormRow>
                    <Button 
                        type="submit"
                        label={!isLoading ? "Reset password" : "Reset password"}
                        disabled={isLoading || !email}
                    />
                </FormRow>
                <FormRow>
                    <NavLink to="/login" className={forgotFormButtonLinkStyle}>Do you remember your password?</NavLink>
                </FormRow>
            </Form>
        </Card>
    );
};

export default ForgotPasswordForm;
