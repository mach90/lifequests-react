import AuthPanel from "../ui/AuthPanel";
import Welcome from "../ui/Welcome";
import SignupForm from "../features/authentication/SignupForm";

const registerContainerStyle = "flex flex-row h-full";

function Register() {
    return (
        <div className={registerContainerStyle}>
            <Welcome />
            <AuthPanel>
                <SignupForm />
            </AuthPanel>
        </div>
    );
};

export default Register;
