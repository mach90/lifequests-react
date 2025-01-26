import { useQuery } from "@tanstack/react-query";
import { getMe } from "../services/apiUser";
import UserInfosAvatar from "./UserInfosAvatar";
import UserInfosName from "./UserInfosName";
import UserInfosLevelXp from "./UserInfosLevelXp";
import UserInfosMoney from "./UserInfosMoney";
import LoadingSpinner from "./LoadingSpinner";

const userInfosContainerStyle = "flex flex-row justify-start items-center text-slate-200";
const userInfosDataContainerStyle = "flex flex-col h-full justify-center items-start";

function UserInfos() {
    const { isLoading, data: userData, error } = useQuery({
        queryKey: ["user"],
        queryFn: getMe,
    });

    // console.log("GETMEQUERIED", userData);

    if (isLoading) {
        return <LoadingSpinner size="md" />;
    }

    return (
        <div className={userInfosContainerStyle}>
            <UserInfosAvatar data={userData?.data} />
            <div className={userInfosDataContainerStyle}>
                <UserInfosName data={userData?.data} />
                <UserInfosLevelXp data={userData?.data} />
                <UserInfosMoney data={userData?.data} />
            </div>
        </div>
    );
};

export default UserInfos;