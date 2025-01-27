import { PiCoinVerticalFill } from "react-icons/pi";
const userInfosMoneyContainerStyle = "flex flex-row bg-container rounded-br-full gap-1 justify-start items-center font-semibold text-xs px-4 py-1 w-32 border-b-4 border-r-4 border-slate-700";
const userInfosMoneyIconStyle = "text-yellow-500";

function UserInfosMoney({data}) {
    return (
        <div className={userInfosMoneyContainerStyle}>
            <PiCoinVerticalFill className={userInfosMoneyIconStyle} /> 
            {data?.money}
        </div>
    );
};

export default UserInfosMoney;
