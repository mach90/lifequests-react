import { useState } from "react";
import AccountMenu from "../features/settings/AccountMenu";
import AccountSettings from "../features/settings/AccountSettings";

const accountContainerStyle = "grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full";

function Account() {
    const [form, setForm] = useState("user-data-form");

    function handleForm(id) {
        setForm(id);
    }

    return (
        <div className={accountContainerStyle}>
            <AccountMenu handleForm={(id) => handleForm(id)} />
            <AccountSettings form={form} />
        </div>
    );
};

export default Account;