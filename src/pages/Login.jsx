import AuthLayout from "../ui/AuthLayout";
import Welcome from "../ui/Welcome";
import LoginForm from "../features/authentication/LoginForm";
import AuthPanel from "../ui/AuthPanel";

function Login() {
    return (
        <AuthLayout>
            <Welcome />
            <AuthPanel>
                <LoginForm />
            </AuthPanel>
        </AuthLayout>
    );
};

export default Login;