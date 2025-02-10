import Card from "../../ui/Card";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

const guildChatbotInputContainerStyle = "col-span-4 row-span-4";

function GuildChatbotInput({ guild }) {
    return (
        <div className={guildChatbotInputContainerStyle}>
            <Card title="Chatbot input">
                <Form>
                    <FormRow>
                        <Input type="textarea" placeholder="Chatbot input not yet implemented..." />
                        <Button type="submit" label="Send" />
                    </FormRow>
                </Form>
            </Card>
        </div>
    );
};

export default GuildChatbotInput;
