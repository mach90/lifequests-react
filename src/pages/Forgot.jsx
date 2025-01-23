import AuthLayout from "../ui/AuthLayout";
import Welcome from "../ui/Welcome";
import ForgotPasswordForm from "../features/authentication/ForgotPasswordForm";
import AuthPanel from "../ui/AuthPanel";

function Login() {
    return (
        <AuthLayout>
            <Welcome />
            <AuthPanel>
                <ForgotPasswordForm />
            </AuthPanel>
        </AuthLayout>
    );
};

export default Login;