import { useHandleChange } from "../../hooks/useHandleChange";
import { useUpdatePassword } from "./useUpdatePassword";
import Card from "../../ui/Card";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import FormError from "../../ui/FormError";
import toast from "react-hot-toast";
import Button from "../../ui/Button";

function UpdateUserPasswordForm() {
    const {formData, handleChange, setFormData} = useHandleChange({
        passwordCurrent: "",
        password: "",
        passwordConfirm: ""
    });
    
    const {updateUserPassword, isPending, error} = useUpdatePassword();

    function handleSubmit(e) {
        e.preventDefault();
        
        if (!formData.passwordCurrent || !formData.password || !formData.passwordConfirm) return;
        if (formData.password !== formData.passwordConfirm) return;
        
        updateUserPassword(formData, {
            onSuccess: () => {
                setFormData({
                    passwordCurrent: "",
                    password: "",
                    passwordConfirm: ""
                });
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
                        disabled={isPending}
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
                        label={!isPending ? "Update Password" : "Updating password..."}
                        disabled={isPending || !isValid}
                        isPending={isPending}
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