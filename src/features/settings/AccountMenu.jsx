import { FaPlug, FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";

const accountMenuStyle = "bg-card flex flex-col gap-4 justify-start items-start col-span-3 row-span-6 text-white p-8";
const accountMenuButtonStyle = "w-full flex flex-row gap-2 items-center border-b border-slate-800 hover:bg-variant1 text-left";

function AccountMenu({ handleForm }) {
    return (
        <div className={accountMenuStyle}>
            <button onClick={() => handleForm("user-data-form")} className={accountMenuButtonStyle}><FaUser /> Profile</button>
            <button onClick={() => handleForm("user-password-form")} className={accountMenuButtonStyle}><RiLockPasswordFill /> Password</button>
            <button onClick={() => handleForm("user-settings-form")} className={accountMenuButtonStyle}><IoSettingsSharp /> App</button>
            <button onClick={() => handleForm("user-account-form")} className={accountMenuButtonStyle}><FaPlug /> Account</button>
        </div>
    );
};

export default AccountMenu;