import { PiCoinVerticalFill } from "react-icons/pi";
const userInfosMoneyStyle = "flex flex-row gap-1 justify-center items-center font-semibold";
const userInfosMoneyIconStyle = "text-yellow-500";

function UserInfosMoney({data}) {
    return (
        <div className={userInfosMoneyStyle}>
            <PiCoinVerticalFill className={userInfosMoneyIconStyle} /> 
            {data?.money}
        </div>
    );
};

export default UserInfosMoney;
