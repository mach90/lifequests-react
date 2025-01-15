import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { getMe } from "../services/apiAuth";
import {calculateLevel, calculateXp} from "../utils/levels";
import { PiCoinVerticalFill } from "react-icons/pi";
import { MdOutlineManageAccounts } from "react-icons/md";

function UserInfos() {
    const [isHovered, setIsHovered] = useState(false);

    const { isLoading, data, error } = useQuery({
        queryKey: ["user"],
        queryFn: getMe,
    });

    const currentLevel = calculateLevel(data.experience);
    const currentLevelStartXp = calculateXp(currentLevel).toFixed(0);
    const nextLevelStartXp = calculateXp(currentLevel + 1).toFixed(0);
    const progress = (((data.experience - currentLevelStartXp)/(nextLevelStartXp - currentLevelStartXp))*100).toFixed(2);

    return (
        <div className="bg-container px-4 py-2 flex flex-row gap-6 justify-start items-center rounded-lg text-slate-200">
            <NavLink to="account" className="block relative h-12 w-12" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className="relative h-12 w-12">
                    {!isHovered ? (
                    <img 
                        src={`http://127.0.0.1:3000/img/users/${data.photo}`} 
                        alt="User avatar" 
                        className="h-12 w-12 rounded-full object-cover transition-opacity duration-200"
                    />
                    ) : (
                    <div className="h-12 w-12 rounded-full bg-card flex items-center justify-center transition-opacity duration-200">
                        <MdOutlineManageAccounts className="text-xl"/>
                    </div>
                    )}
                </div>
            </NavLink>
            <div className="text-xl font-bold">{data.name}</div>
            <div className="text-2xl font-bold">Lv {currentLevel}</div>
            {/* <div>{currentLevelStartXp}/{data.experience}/{nextLevelStartXp}/{progress}%</div> */}
            <div className="flex flex-col gap-1 justify-center items-end">
                <div className="bg-[#28344c] w-40 h-2 overflow-hidden">
                    {/* Barre de progression */}
                    <div
                        className="bg-variant1 h-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="text-xs">{data.experience} / {nextLevelStartXp} EXP</div>
            </div>
            <div className="flex flex-row gap-1 justify-center items-center font-semibold"><PiCoinVerticalFill className="text-yellow-500"/> {data.money}</div>
        </div>
    );
};

export default UserInfos;