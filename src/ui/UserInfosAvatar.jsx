import { NavLink } from "react-router-dom";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const userInfosAvatarContainerStyle = "h-20 py-2.5";
const userInfosAvatarStyle = "h-full rounded-full border-2 border-main4";

function UserInfosAvatar({data}) {   
    const photoUrl = data?.photo ? `${serverUrl}/img/users/${data.photo}` : `${serverUrl}/img/users/default.jpg`;

    return (
        <NavLink to="/settings/profile" className={userInfosAvatarContainerStyle}>
            <img src={photoUrl} alt="User avatar" className={userInfosAvatarStyle} />
        </NavLink>
    );
};

export default UserInfosAvatar;
