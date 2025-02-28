import Welcome from "../ui/Welcome";
import ResetPasswordForm from "../features/authentication/ResetPasswordForm";
import AuthPanel from "../ui/AuthPanel";

const resetContainerStyle = "flex flex-row h-full";

function Reset() {
    return (
        <div className={resetContainerStyle}>
            <Welcome />
            <AuthPanel>
                <ResetPasswordForm />
            </AuthPanel>
        </div>
    );
};

export default Reset;