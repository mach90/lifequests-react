const userInfosUsernameStyle = "uppercase font-bold text-neutral0 text-xl";

function UserInfosName({data}) {
    return (
        <div className={userInfosUsernameStyle}>{data?.name}</div>
    );
};

export default UserInfosName;
