import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineManageAccounts } from "react-icons/md";

const userInfosAvatarStyle = "h-12 w-12 rounded-full object-cover transition-opacity duration-200";
const userInfosAvatarLinkStyle = "h-12 w-12 rounded-full bg-card flex items-center justify-center transition-opacity duration-200";

function UserInfosAvatar({data}) {
    const [isHovered, setIsHovered] = useState(false);
    
    const photoUrl = data?.photo ? `http://127.0.0.1:3000/img/users/${data.photo}` : "http://127.0.0.1:3000/img/users/default.jpg";

    return (
        <NavLink to="account" className="relative h-12 w-12" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="relative h-12 w-12">
                {!isHovered ? (
                <img src={photoUrl} alt="User avatar" className={userInfosAvatarStyle} />
                ) : (
                <div className={userInfosAvatarLinkStyle}>
                    <MdOutlineManageAccounts className="text-3xl"/>
                </div>
                )}
            </div>
        </NavLink>
    );
};

export default UserInfosAvatar;
