import { useHandleChange } from "../../hooks/useHandleChange";
import { useUser } from "../authentication/useUser";
import { useUpdateSettings } from "../../features/settings/useUpdateSettings";
import Card from "../../ui/Card";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import FormError from "../../ui/FormError";

function UpdateUserSettingsForm() {
    const {user} = useUser();
    
    const {formData, handleChange, setFormData} = useHandleChange({
            theme: user?.data?.settings?.theme,
            displayExperience: user?.data?.settings?.displayExperience,
    });
    
    function handleSubmit(e) {
        e.preventDefault();

        const submitData = {
            settings: {
                theme: formData.theme,
                displayExperience: formData.displayExperience
            }
        };

        updateSettings(submitData);
    }

    const {updateSettings, isPending, error} = useUpdateSettings();

    return (
        <Card title="Update settings">
            <Form onSubmit={handleSubmit}>
                <FormRow>
                    <Select
                        inputName="theme"
                        label="Theme"
                        value={formData.theme}
                        onChange={handleChange}
                        disabled={isPending}
                        options={[
                            { value: "dark", label: "Dark" },
                            { value: "gray", label: "Gray" },
                            { value: "light", label: "Light" },
                        ]}
                    />
                </FormRow>
                <FormRow>
                    <Select
                        inputName="displayExperience"
                        label="Display experience"
                        value={formData.displayExperience}
                        onChange={handleChange}
                        disabled={isPending}
                        options={[
                            { value: "classic", label: "Classic (1000xp/3000xp)" },
                            { value: "remaining", label: "Remaining (2000xp)" },
                        ]}
                    />
                </FormRow>
                <FormRow>
                    <Button 
                        type="submit" 
                        label={!isPending ? "Update" : "Updating..."}
                        disabled={isPending}
                        isPending={isPending}
                    />
                </FormRow>
                <FormRow>
                    <FormError error={error} />
                </FormRow>
            </Form>
        </Card>
    );
};

export default UpdateUserSettingsForm;