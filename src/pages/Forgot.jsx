import Welcome from "../ui/Welcome";
import ForgotPasswordForm from "../features/authentication/ForgotPasswordForm";
import AuthPanel from "../ui/AuthPanel";

const forgotContainerStyle = "flex flex-row h-full";

function Login() {
    return (
        <div className={forgotContainerStyle}>
            <Welcome />
            <AuthPanel>
                <ForgotPasswordForm />
            </AuthPanel>
        </div>
    );
};

export default Login;