// import { useLocalStorageState } from "../hooks/useLocalStorageState";
import {calculateLevel, calculateXp} from "../utils/levels";

const userInfosLevelXpContainerStyle = "w-max h-max flex flex-row gap-2.5 justify-start items-center";
const userInfosLevelStyle = "uppercase font-bold text-xl text-main4";

const userInfosXpContainerStyle = "relative w-50 h-4";
const userInfosXpBarStyle = "w-full h-full bg-green1 rounded-full duration-600";
const userInfosXpBarProgressStyle = "bg-green2 h-full rounded-full duration-600";
const userInfosXpNumbersStyle = "absolute top-0 right-2 text-xs font-bold text-main1 duration-200";

function UserInfosLevelXp({data}) {
    const currentLevel = calculateLevel(data?.experience);
    const currentLevelStartXp = calculateXp(currentLevel).toFixed(0);
    const nextLevelStartXp = calculateXp(currentLevel + 1).toFixed(0);
    
    let progress;
    if (currentLevel === 1) {
        progress = ((data?.experience / nextLevelStartXp) * 100).toFixed(2);
    } else {
        progress = (((data?.experience - currentLevelStartXp) / (nextLevelStartXp - currentLevelStartXp)) * 100).toFixed(2);
    }

    return (
        <div className={userInfosLevelXpContainerStyle}>
            <div className={userInfosLevelStyle}>Lv {currentLevel}</div>
            <div className={userInfosXpContainerStyle}>
                <div className={userInfosXpBarStyle}>
                    <div className={userInfosXpBarProgressStyle} style={{ width: `${progress}%` }}></div>
                </div>
                {data?.settings?.displayExperience === "classic" 
                    ? <div className={userInfosXpNumbersStyle}>{data?.experience} / {nextLevelStartXp} EXP</div>
                    : <div className={userInfosXpNumbersStyle}>{nextLevelStartXp - data?.experience} EXP</div>
                }
            </div>
        </div>
    );
};

export default UserInfosLevelXp;
