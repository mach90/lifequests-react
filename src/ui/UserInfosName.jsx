const userInfosUsernameStyle = "text-2xl font-black";

function UserInfosName({data}) {
    return (
        <div className={userInfosUsernameStyle}>{data?.name}</div>
    );
};

export default UserInfosName;
