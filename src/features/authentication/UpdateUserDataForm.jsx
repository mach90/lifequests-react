import { useHandleChange } from "../../hooks/useHandleChange";
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";
import Card from "../../ui/Card";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import FormError from "../../ui/FormError";
import Button from "../../ui/Button";

function UpdateUserDataForm() {
    const {user} = useUser();

    const {formData, handleChange, setFormData} = useHandleChange({
        name: user?.data?.name,
        email: user?.data?.email,
        photo: ""
    });
    const {updateUser, isPending, error} = useUpdateUser();

    function handleSubmit(e) {
        e.preventDefault();
        
        // FormData object for handling file upload
        const submitData = new FormData();
        
        // Only append non-empty values
        Object.entries(formData).forEach(([key, value]) => {
            if (key === "photo") {
                if (value) submitData.append(key, value);
            } else {
                if (value.trim() !== "") submitData.append(key, value);
            }
        });
        
        if ([...submitData.entries()].length === 0) return;
        
        updateUser(submitData, {
            onSuccess: () => {
                setFormData({ 
                    photo: null 
                });
            }
        });
    }

    return (
        <Card title="Update user">
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
                    />
                </FormRow>
                <FormRow>
                    <Input 
                        type="file"
                        id="photo"
                        inputName="photo"
                        label="Character avatar"
                        accept="image/*"
                        onChange={handleChange}
                        disabled={isPending}
                    />
                </FormRow>
                <FormRow>
                    <Button 
                        type="submit" 
                        label={!isPending ? "Update" : "Updating..."}
                        disabled={isPending || (!formData.name && !formData.email && !formData.photo)}
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

export default UpdateUserDataForm;