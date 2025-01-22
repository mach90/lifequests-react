import UpdateUserDataForm from "../authentication/UpdateUserDataForm";
import UpdateUserPasswordForm from "../authentication/UpdateUserPasswordForm";
import UpdateUserAccountForm from "../authentication/UpdateUserAccountForm";
import UpdateUserSettingsForm from "../settings/UpdateUserSettingsForm";

const accountStyle = "bg-card col-span-9 row-span-full text-white flex justify-center items-center";

function AccountSettings({ form }) {
    return (
        <div className={accountStyle}>
            {form === "user-data-form" && <UpdateUserDataForm />}
            {form === "user-password-form" && <UpdateUserPasswordForm />}
            {form === "user-settings-form" && <UpdateUserSettingsForm />}
            {form === "user-account-form" && <UpdateUserAccountForm />}
        </div>
    );
};

export default AccountSettings;
