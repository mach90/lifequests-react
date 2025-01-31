import { NavLink } from "react-router-dom";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const userInfosAvatarContainerStyle = "h-full bg-container rounded-l-full border-l-4 border-y-4 border-slate-700";
const userInfosAvatarStyle = "h-full border-4 border-container rounded-full";

function UserInfosAvatar({data}) {   
    const photoUrl = data?.photo ? `${serverUrl}/img/users/${data.photo}` : `${serverUrl}/img/users/default.jpg`;

    return (
        <div className={userInfosAvatarContainerStyle}>
            <NavLink to="/settings/profile">
                <img src={photoUrl} alt="User avatar" className={userInfosAvatarStyle} />
            </NavLink>
        </div>
    );
};

export default UserInfosAvatar;
