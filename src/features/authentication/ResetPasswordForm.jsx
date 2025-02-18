import { useState } from "react";
import { useParams } from "react-router-dom";
import { useResetPassword } from "./useResetPassword";
import Card from "../../ui/Card";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import FormError from "../../ui/FormError";
import Button from "../../ui/Button";
import toast from "react-hot-toast";

function ResetPasswordForm() {
    const { token } = useParams();
    const [formData, setFormData] = useState({
        password: "",
        passwordConfirm: ""
    });

    const { resetUserPassword, isUpdating, error } = useResetPassword();

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        // Form validation
        if (!formData.password || !formData.passwordConfirm) {
            toast.error("Please fill in all fields");
            return;
        }
        if (formData.password !== formData.passwordConfirm) {
            toast.error("Passwords do not match");
            return;
        }
        if (formData.password.length < 8) {
            toast.error("Password must be at least 8 characters");
            return;
        }
        
        // Submit form
        resetUserPassword({
            token,
            password: formData.password,
            passwordConfirm: formData.passwordConfirm
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
                        disabled={isUpdating}
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
                        disabled={isUpdating}
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
                        label={!isUpdating ? "Reset Password" : "Resetting password..."}
                        disabled={isUpdating}
                        isUpdating={isUpdating}
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