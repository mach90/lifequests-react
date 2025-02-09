import { useUser } from "../features/authentication/useUser";
import UserInfosAvatar from "./UserInfosAvatar";
import UserInfosName from "./UserInfosName";
import UserInfosLevelXp from "./UserInfosLevelXp";
import UserInfosMoney from "./UserInfosMoney";
import LoadingSpinner from "./LoadingSpinner";
import UserInfosData from "./UserInfosData";

const userInfosContainerStyle = "flex flex-row items-center justify-start text-slate-200 h-max w-max gap-2.5";

function UserInfos() {
    const { isLoading, user, error } = useUser();
    
    // console.log("GETMEQUERIED", userData);

    if (isLoading) {
        return <LoadingSpinner size="md" />;
    }

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