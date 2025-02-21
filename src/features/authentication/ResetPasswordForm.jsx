import { useHandleChange } from "../../hooks/useHandleChange";
import { useResetPassword } from "./useResetPassword";
import { useParams } from "react-router-dom";
import Card from "../../ui/Card";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import FormError from "../../ui/FormError";
import Button from "../../ui/Button";

function ResetPasswordForm() {
    const { token } = useParams();
    const {formData, handleChange, setFormData} = useHandleChange({
        token,
        password: "",
        passwordConfirm: "",
    });

    const {resetUserPassword, isPending, error} = useResetPassword();

    function handleSubmit(e) {
        e.preventDefault();
        
        if (!formData.password || !formData.passwordConfirm) return;
        if (formData.password !== formData.passwordConfirm) return;
        if (formData.password.length < 8) return;
        
        resetUserPassword(formData, {
            onSuccess: () => {
                setFormData({
                    password: "",
                    passwordConfirm: "",
                });
            },
            onError: () => {
                setFormData({
                    password: "",
                    passwordConfirm: "",
                });
            }
        });
    }

    return (
        <Card title="Reset password">
            <Form onSubmit={handleSubmit}>
                <FormRow>
                    <Input
                        type="password"
                        inputName="password"
                        placeholder="******"
                        label="New password"
                        value={formData.password}
                        onChange={handleChange}
                        disabled={isPending}
                        required
                        minLength={8}
                    />
                    {formData.password && formData.password.length < 8 && (
                        <div className="text-red2">
                            Password must be at least 8 characters
                        </div>
                    )}
                </FormRow>
                <FormRow>
                    <Input
                        type="password"
                        inputName="passwordConfirm"
                        placeholder="******"
                        label="New password confirm"
                        value={formData.passwordConfirm}
                        onChange={handleChange}
                        disabled={isPending}
                        required
                        minLength={8}
                    />
                    {formData.password && formData.passwordConfirm && 
                    formData.password !== formData.passwordConfirm && formData.passwordConfirm.length >= 8 && (
                        <div className="text-red2">
                            Passwords do not match
                        </div>
                    )}
                </FormRow>
                <FormRow>
                    <Button
                        type="submit" 
                        label={!isPending ? "Reset Password" : "Processing..."}
                        disabled={isPending}
                        isPending={isPending}
                    />
                </FormRow>
                {error && (
                    <FormRow>
                        <FormError error={error} />
                    </FormRow>
                )}
            </Form>
        </Card>
    );
}

export default ResetPasswordForm;