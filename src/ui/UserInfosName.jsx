const userInfosUsernameStyle = "text-xl font-bold";

function UserInfosName({data}) {
    return (
        <div className={userInfosUsernameStyle}>{data.name}</div>
    );
};

export default UserInfosName;
