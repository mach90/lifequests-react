import { useState } from "react";
import { useUpdatePassword } from "./useUpdatePassword";
import Card from "../../ui/Card";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import FormError from "../../ui/FormError";
import toast from "react-hot-toast";
import Button from "../../ui/Button";

const buttonStyle = "bg-slate-700 hover:bg-variant1 text-white font-bold px-4 py-2 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed";

function UpdateUserPasswordForm() {
    const [formData, setFormData] = useState({
        passwordCurrent: "",
        password: "",
        passwordConfirm: ""
    });
    
    const { updateUserPassword, isUpdating, error } = useUpdatePassword();

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        if (!formData.passwordCurrent || !formData.password || !formData.passwordConfirm) return;
        if (formData.password !== formData.passwordConfirm) {
            // You might want to handle this error state in the UI
            return;
        }
        
        updateUserPassword(formData, {
            onSuccess: () => {
                // Clear form after successful update
                setFormData({
                    passwordCurrent: "",
                    password: "",
                    passwordConfirm: ""
                });
                toast.success("Password changed");
            }
        });
    }

    const isValid = 
        formData.passwordCurrent && 
        formData.password && 
        formData.passwordConfirm && 
        formData.password === formData.passwordConfirm;

    return (
        <Card title="Update password">
            <Form onSubmit={handleSubmit}>
                <FormRow>
                    <Input
                        type="password"
                        inputName="passwordCurrent"
                        placeholder="******"
                        label="Current password"
                        value={formData.passwordCurrent}
                        onChange={handleChange}
                        disabled={isUpdating}
                        required
                        minLength={8}
                    />
                </FormRow>
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
                        label={!isUpdating ? "Update Password" : "Updating password..."}
                        disabled={isUpdating || !isValid}
                        isUpdating={isUpdating}
                    />
                </FormRow>
                <FormRow>
                    <FormError error={error} />
                </FormRow>
            </Form>
        </Card>
    );
}

export default UpdateUserPasswordForm;