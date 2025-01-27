import { useUser } from "../features/authentication/useUser";
import UserInfosAvatar from "./UserInfosAvatar";
import UserInfosName from "./UserInfosName";
import UserInfosLevelXp from "./UserInfosLevelXp";
import UserInfosMoney from "./UserInfosMoney";
import LoadingSpinner from "./LoadingSpinner";

const userInfosContainerStyle = "flex flex-row justify-start items-center text-slate-200";
const userInfosDataContainerStyle = "flex flex-col h-full justify-center items-start";

function UserInfos() {
    const { isLoading, user, error } = useUser();
    
    // console.log("GETMEQUERIED", userData);

    if (isLoading) {
        return <LoadingSpinner size="md" />;
    }

    return (
        <div className={userInfosContainerStyle}>
            <UserInfosAvatar data={user?.data} />
            <div className={userInfosDataContainerStyle}>
                <UserInfosName data={user?.data} />
                <UserInfosLevelXp data={user?.data} />
                <UserInfosMoney data={user?.data} />
            </div>
        </div>
    );
};

export default UserInfos;