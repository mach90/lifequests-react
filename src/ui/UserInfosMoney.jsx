import { PiCoinVerticalFill } from "react-icons/pi";
const userInfosMoneyContainerStyle = "w-max h-full flex flex-row px-2.5 gap-2.5 border-l border-l-main3 items-center";
const userInfosMoneyIconStyle = "w-4 h-4 text-orange2";
const userInfosMoneyValueStyle = "text-xl font-bold text-neutral0";

function UserInfosMoney({data}) {
    return (
        <div className={userInfosMoneyContainerStyle}>
            <PiCoinVerticalFill className={userInfosMoneyIconStyle} /> 
            <p className={userInfosMoneyValueStyle}>{data?.money}</p>
        </div>
    );
};

export default UserInfosMoney;
