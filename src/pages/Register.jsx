import AuthLayout from "../ui/AuthLayout";
import AuthPanel from "../ui/AuthPanel";
import Welcome from "../ui/Welcome";
import SignupForm from "../features/authentication/SignupForm";

function Register() {
    return (
        <AuthLayout>
            <Welcome />
            <AuthPanel>
                <SignupForm />
            </AuthPanel>
        </AuthLayout>
    );
};

export default Register;
