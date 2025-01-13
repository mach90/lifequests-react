import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { getMe } from "../services/apiAuth";

function UserInfos() {
    const { isLoading, data, error } = useQuery({
        queryKey: ["user"],
        queryFn: getMe,
    });

    console.log("THIS IS THE DATA", data)

    return (
        <div className="bg-blue-900 p-2 flex flex-row gap-2 justify-start items-center">
            <div><NavLink to="account"><img src={`http://127.0.0.1:3000/img/users/${data.photo}`} /></NavLink></div>
            <div>{data.name}</div>
            <div>Lv.{data.level}</div>
            <div>{data.experience}</div>
            <div>🪙 {data.money}</div>
        </div>
    );
};

export default UserInfos;
