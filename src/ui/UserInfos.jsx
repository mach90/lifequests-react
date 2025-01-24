import { useQuery } from "@tanstack/react-query";
import { getMe } from "../services/apiUser";
import UserInfosAvatar from "./UserInfosAvatar";
import UserInfosName from "./UserInfosName";
import UserInfosLevelXp from "./UserInfosLevelXp";
import UserInfosMoney from "./UserInfosMoney";
import LoadingSpinner from "./LoadingSpinner";

const userInfosContainerStyle = "bg-container px-4 py-2 flex flex-row gap-6 justify-start items-center rounded-lg text-slate-200";

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
            <UserInfosName data={userData?.data} />
            <UserInfosLevelXp data={userData?.data} />
            <UserInfosMoney data={userData?.data} />
        </div>
    );
};

export default UserInfos;