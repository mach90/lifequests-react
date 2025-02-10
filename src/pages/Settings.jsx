import { Outlet } from "react-router-dom";
import SettingsMenu from "../features/settings/SettingsMenu";

const settingsContainerStyle = "grid grid-flow-col grid-cols-12 grid-rows-12 gap-4 h-full";
const settingsOutletContainerStyle = "col-span-9 row-span-full";

function Settings() {
    return (
        <div className={settingsContainerStyle}>
            <SettingsMenu />
            <div className={settingsOutletContainerStyle}>
                <Outlet />
            </div>
        </div>
    );
};

export default Settings;