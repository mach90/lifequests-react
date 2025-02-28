import Welcome from "../ui/Welcome";
import LoginForm from "../features/authentication/LoginForm";
import AuthPanel from "../ui/AuthPanel";

const loginContainerStyle = "flex flex-row h-full";

function Login() {
    return (
        <div className={loginContainerStyle}>
            <Welcome />
            <AuthPanel>
                <LoginForm />
            </AuthPanel>
        </div>
    );
};

export default Login;