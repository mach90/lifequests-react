import { useState } from "react";
import { useUpdateUser } from "./useUpdateUser";
import Card from "../../ui/Card";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import FormError from "../../ui/FormError";
import toast from "react-hot-toast";
import Button from "../../ui/Button";

const userDataFormButtonStyle = "bg-slate-700 hover:bg-variant1 text-white font-bold px-4 py-2 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed";

function UpdateUserDataForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        photo: ""
    });
    const { updateUser, isUpdating, error } = useUpdateUser();

    function handleChange(e) {
        const { name, type } = e.target;
        
        if (type === "file") {
            const file = e.target.files[0];
            setFormData(prev => ({
                ...prev,
                [name]: file
            }));
        } else {
            const { value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        // Create FormData object for handling file upload
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
                // Clear form after successful update
                setFormData({ name: "", email: "", photo: null });
                toast.success("Change successful")
            }
        });
    }

    console.log(error)

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
                        disabled={isUpdating}
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
                        disabled={isUpdating}
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
                        disabled={isUpdating}
                    />
                </FormRow>
                <FormRow>
                    <Button 
                        type="submit" 
                        label={!isUpdating ? "Update" : "Updating..."}
                        disabled={isUpdating || (!formData.name && !formData.email && !formData.photo)}
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

export default UpdateUserDataForm;