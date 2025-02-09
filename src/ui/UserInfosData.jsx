const userInfosDataContainerStyle = "h-max w-max flex flex-col justify-center items-start";

function UserInfosData({children}) {
    return (
        <div className={userInfosDataContainerStyle}>
            {children}
        </div>
    );
};

export default UserInfosData;
