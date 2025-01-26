import { useLocalStorageState } from "../hooks/useLocalStorageState";
import {calculateLevel, calculateXp} from "../utils/levels";

const userInfosLevelXpContainerStyle = "bg-slate-700 h-full flex flew-row justify-start items-center rounded-r-full w-full";
const userInfosLevelStyle = "text-lg font-black text-white px-4 bg-slate-700";
const userInfosXpContainerStyle = "flex flex-col gap-1 justify-center items-end h-full w-64";
const userInfosXpBarStyle = "relative bg-radial-[at_50%_75%] from-slate-900 via-slate-800 to-slate-900 to-90% w-full h-full rounded-r-full border-4 border-slate-700";
const userInfosXpBarProgressStyle = "bg-linear-to-r from-variant2 to-lime-300 h-full rounded-r-xl";
const userInfosXpNumbersStyle = "absolute text-xs font-medium text-white pr-4";

function UserInfosLevelXp({ data }) {
    const [xpDisplayStyle] = useLocalStorageState([], "xpDisplayStyle");

    const currentLevel = calculateLevel(data?.experience);
    const currentLevelStartXp = calculateXp(currentLevel).toFixed(0);
    const nextLevelStartXp = calculateXp(currentLevel + 1).toFixed(0);
    const progress = (((data?.experience - currentLevelStartXp)/(nextLevelStartXp - currentLevelStartXp))*100).toFixed(2);

    return (
        <div className={userInfosLevelXpContainerStyle}>
            <div className={userInfosLevelStyle}>Lv {currentLevel}</div>
            <div className={userInfosXpContainerStyle}>
                <div className={userInfosXpBarStyle}>
                    <div className={userInfosXpBarProgressStyle} style={{ width: `${progress}%` }}></div>
                </div>
                {xpDisplayStyle 
                    ? <div className={userInfosXpNumbersStyle}>{nextLevelStartXp - data?.experience} EXP</div>
                    : <div className={userInfosXpNumbersStyle}>{data?.experience} / {nextLevelStartXp} EXP</div>
                }
            </div>
        </div>
    );
};

export default UserInfosLevelXp;
