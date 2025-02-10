import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import Card from "../../ui/Card";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";


const updateUserSettingsFormSectionTitleStyle = "text-white text-xl font-medium underline";

function UpdateUserSettingsForm() {
    const [xpDisplayStyle, setXpDisplayStyle] = useLocalStorageState(false, "xpDisplayStyle");

    function handleXpDisplayStyle(e) {
        setXpDisplayStyle(e.target.checked);
    }

    return (
        <Card title="Update settings">
            <Form>
                <FormRow>
                    <Input 
                        type="checkbox" 
                        label="Display remaining XP instead of Total"
                        checked={xpDisplayStyle} 
                        onChange={handleXpDisplayStyle}
                    /> 
                </FormRow>
            </Form>
        </Card>
    );
};

export default UpdateUserSettingsForm;
