import AuthLayout from "../ui/AuthLayout";
import Welcome from "../ui/Welcome";
import ResetPasswordForm from "../features/authentication/ResetPasswordForm";
import AuthPanel from "../ui/AuthPanel";

function Reset() {
    return (
        <AuthLayout>
            <Welcome />
            <AuthPanel>
                <ResetPasswordForm />
            </AuthPanel>
        </AuthLayout>
    );
};

export default Reset;