import { useHandleChange } from "../../hooks/useHandleChange";
import { useForgotPassword } from "./useForgotPassword";
import { NavLink } from "react-router-dom";
import Card from "../../ui/Card";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

const forgotFormButtonLinkStyle = "text-main4 hover:text-neutral0 text-sm font-bold px-4 py-2 rounded-lg w-full text-center border border-main4 hover:border-neutral0 duration-200";

function ForgotPasswordForm() {
    const {formData, handleChange, setFormData} = useHandleChange({
        email: "",
    });
    const {forgotPassword, isPending, error} = useForgotPassword();

    function handleSubmit(e) {
        e.preventDefault();

        if(!email) return;

        forgotPassword(formData, {
            onSuccess: () => {
                setFormData({
                    email: "",
                });
            },
            onError: () => {
                setFormData({
                    email: "",
                });
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
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isPending}
                    />
                </FormRow>
                <FormRow>
                    <Button 
                        type="submit"
                        label={!isPending ? "Reset password" : "Reset password"}
                        disabled={isPending || !email}
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
