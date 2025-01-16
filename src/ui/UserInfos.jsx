import { useQuery } from "@tanstack/react-query";
import { getMe } from "../services/apiAuth";
import UserInfosAvatar from "./UserInfosAvatar";
import UserInfosName from "./UserInfosName";
import UserInfosLevelXp from "./UserInfosLevelXp";
import UserInfosMoney from "./UserInfosMoney";

const userInfosContainerStyle = "bg-container px-4 py-2 flex flex-row gap-6 justify-start items-center rounded-lg text-slate-200";

function UserInfos() {
    const { isLoading, data, error } = useQuery({
        queryKey: ["user"],
        queryFn: getMe,
    });

    return (
        <div className={userInfosContainerStyle}>
            <UserInfosAvatar data={data} />
            <UserInfosName data={data} />
            <UserInfosLevelXp data={data} />
            <UserInfosMoney data={data} />
        </div>
    );
};

export default UserInfos;