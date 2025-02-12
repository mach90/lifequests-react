import { NavLink } from "react-router-dom";
import Card from "../../ui/Card";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";

const forgotInfoStyle = "text-white w-72 text-justify"
const forgotFormButtonLinkStyle = "bg-slate-700 hover:brightness-90 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-md w-full text-center";


function ForgotPasswordForm() {
    return (
        <Card title="Forgot Password">
            <Form>
                <FormRow>
                    <p className={forgotInfoStyle}>A link to reset the password will be sent to the email address if an account exists.</p>
                </FormRow>
                <FormRow>
                    <NavLink to="/login" className={forgotFormButtonLinkStyle}>Do you remember your password?</NavLink>
                </FormRow>
            </Form>
        </Card>
    );
};

export default ForgotPasswordForm;
