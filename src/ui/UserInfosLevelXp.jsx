import {calculateLevel, calculateXp} from "../utils/levels";

const userInfosLevelStyle = "text-2xl font-bold";
const userInfosXpContainerStyle = "flex flex-col gap-1 justify-center items-end";
const userInfosXpBarStyle = "bg-[#28344c] w-40 h-2 overflow-hidden";
const userInfosXpBarProgressStyle = "bg-variant1 h-full";
const userInfosXpNumbersStyle = "text-xs";

function UserInfosLevelXp({data}) {
    const currentLevel = calculateLevel(data.experience);
    const currentLevelStartXp = calculateXp(currentLevel).toFixed(0);
    const nextLevelStartXp = calculateXp(currentLevel + 1).toFixed(0);
    const progress = (((data.experience - currentLevelStartXp)/(nextLevelStartXp - currentLevelStartXp))*100).toFixed(2);

    return (
        <>
            <div className={userInfosLevelStyle}>Lv {currentLevel}</div>
            <div className={userInfosXpContainerStyle}>
                <div className={userInfosXpBarStyle}>
                    <div className={userInfosXpBarProgressStyle} style={{ width: `${progress}%` }}></div>
                </div>
                <div className={userInfosXpNumbersStyle}>{data.experience} / {nextLevelStartXp} EXP</div>
            </div>
        </>
    );
};

export default UserInfosLevelXp;
