import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineManageAccounts } from "react-icons/md";

function UserInfosAvatar({data}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <NavLink to="account" className="relative h-12 w-12" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="relative h-12 w-12">
                {!isHovered ? (
                <img 
                    src={`http://127.0.0.1:3000/img/users/${data.photo}`} 
                    alt="User avatar" 
                    className="h-12 w-12 rounded-full object-cover transition-opacity duration-200"
                />
                ) : (
                <div className="h-12 w-12 rounded-full bg-card flex items-center justify-center transition-opacity duration-200">
                    <MdOutlineManageAccounts className="text-3xl"/>
                </div>
                )}
            </div>
        </NavLink>
    );
};

export default UserInfosAvatar;
