const userInfosUsernameStyle = "text-xl text-white uppercase font-black w-60 bg-container border-t-4 border-r-4 border-slate-700 rounded-tr-full px-4 py-0.5";

function UserInfosName({data}) {
    return (
        <div className={userInfosUsernameStyle}>{data?.name}</div>
    );
};

export default UserInfosName;
