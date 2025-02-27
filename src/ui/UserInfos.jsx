import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import UserInfosAvatar from "./UserInfosAvatar";
import UserInfosName from "./UserInfosName";
import UserInfosLevelXp from "./UserInfosLevelXp";
import UserInfosMoney from "./UserInfosMoney";
import UserInfosData from "./UserInfosData";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const userInfosContainerStyle = "flex flex-row items-center justify-start text-slate-200 h-max w-max gap-2.5";

function UserInfos() {
    const { user } = useUser();

    const [theme, setTheme] = useLocalStorageState("light", "theme"); 

    useEffect(() => {
        if (user?.data?.settings?.theme && user.data.settings.theme !== theme) {
            setTheme(user.data.settings.theme);
        }
    }, [user?.data?.settings?.theme, theme, setTheme]);

    useEffect(() => {
        if (theme) {
            document.documentElement.setAttribute("data-theme", theme);
        }
    }, [theme]);

    return (
        <div className={userInfosContainerStyle}>
            <UserInfosAvatar data={user?.data} />
            <UserInfosData>
                <UserInfosName data={user?.data} />
                <UserInfosLevelXp data={user?.data} />
            </UserInfosData>
            <UserInfosMoney data={user?.data} />
        </div>
    
    );
};

export default UserInfos;