import { NavLink } from "react-router-dom";

const forgotTitlestyle = "text-2xl font-bold text-white";
const forgotInfoStyle = "text-white w-72 text-justify"
const forgotFormRow2Style = "flex flex-row gap-2 w-full";
const forgotFormButtonLinkStyle = "bg-slate-700 hover:brightness-90 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-md w-full text-center";


function ForgotPasswordForm() {
    return (
        <>
            <h2 className={forgotTitlestyle}>Forgot password</h2>
            <p className={forgotInfoStyle}>A link to reset the password will be sent to the email address if an account exists.</p>
            <div className={forgotFormRow2Style}>
                <NavLink to="/login" className={forgotFormButtonLinkStyle}>Do you remember your password?</NavLink>
            </div>
        </>
    );
};

export default ForgotPasswordForm;
