import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import { NavLink } from "react-router-dom";
import {calculateLevel, calculateXp} from "../../utils/levels";

const userInfosXpContainerStyle = "relative w-full h-4";
const userInfosXpBarStyle = "w-full h-full bg-green1/50 rounded-full";
const userInfosXpBarProgressStyle = "bg-green2 h-full rounded-full";
const userInfosXpNumbersStyle = "absolute top-0 right-2 text-xs font-bold text-main1";

function ProgressItem({ progr, to, simple }) {
    const [xpDisplayStyle] = useLocalStorageState([], "xpDisplayStyle");

    const currentLevel = calculateLevel(progr?.experience);
    const currentLevelStartXp = calculateXp(currentLevel).toFixed(0);
    const nextLevelStartXp = calculateXp(currentLevel + 1).toFixed(0);
    
    let progress;
    if (currentLevel === 1) {
        progress = ((progr?.experience / nextLevelStartXp) * 100).toFixed(2);
    } else {
        progress = (((progr?.experience - currentLevelStartXp) / (nextLevelStartXp - currentLevelStartXp)) * 100).toFixed(2);
    }

    if(progr === null) return;

    if(simple) return (
        <div className="flex flex-row gap-4 items-center justify-between">
            <p className="w-14 text-main4 uppercase font-medium">Lv {calculateLevel(progr?.experience)}</p> 
            <div className={userInfosXpContainerStyle}>
                <div className={userInfosXpBarStyle}>
                    <div className={userInfosXpBarProgressStyle} style={{ width: `${progress}%` }}></div>
                </div>
                {xpDisplayStyle 
                    ? <div className={userInfosXpNumbersStyle}>{nextLevelStartXp - progr?.experience} EXP</div>
                    : <div className={userInfosXpNumbersStyle}>{progr?.experience} / {nextLevelStartXp} EXP</div>
                }
            </div>
        </div>
    )

    return (
        <NavLink to={to} className="bg-main2/75 hover:bg-main3 px-4 py-2 flex flex-col rounded-lg text-main4 hover:text-neutral0 font-medium duration-200">
            <div className="flex flex-col gap-2 items-center justify-between">
            <h3 className="text-lg font-bold">{progr?.guild?.name}</h3>
            <p className="text-main4 uppercase font-medium">Lv {calculateLevel(progr?.experience)}</p> 
            </div>
                <div className="relative w-full h-1">
                    <div className={userInfosXpBarStyle}>
                        <div className={userInfosXpBarProgressStyle} style={{ width: `${progress}%` }}></div>
                    </div>
                    {/* {xpDisplayStyle 
                        ? <div className={userInfosXpNumbersStyle}>{nextLevelStartXp - progr?.experience} EXP</div>
                        : <div className={userInfosXpNumbersStyle}>{progr?.experience} / {nextLevelStartXp} EXP</div>
                    } */}
                </div>

        </NavLink>
    );
};

export default ProgressItem;
