const userInfosAvatarContainerStyle = "h-full bg-container rounded-l-full border-4 border-slate-700";
const userInfosAvatarStyle = "h-full border-4 border-container rounded-l-full";

function UserInfosAvatar({data}) {   
    const photoUrl = data?.photo ? `http://127.0.0.1:3000/img/users/${data.photo}` : "http://127.0.0.1:3000/img/users/default.jpg";

    return (
        <div className={userInfosAvatarContainerStyle}>
            <img src={photoUrl} alt="User avatar" className={userInfosAvatarStyle} />
        </div>
    );
};

export default UserInfosAvatar;
