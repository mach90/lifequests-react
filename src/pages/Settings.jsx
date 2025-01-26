import { useState } from "react";
import { Outlet } from "react-router-dom";
import SettingsMenu from "../features/settings/SettingsMenu";
import AccountSettings from "../features/settings/AccountSettings";

const settingsContainerStyle = "grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full";
const settingsOutletContainerStyle = "bg-card col-span-9 row-span-full text-white flex justify-center items-center";

function Settings() {
    return (
        <div className={settingsContainerStyle}>
            <SettingsMenu />
            <div className={settingsOutletContainerStyle}>
                <Outlet />
            </div>
            {/* <AccountSettings form={form} /> */}
        </div>
    );
};

export default Settings;