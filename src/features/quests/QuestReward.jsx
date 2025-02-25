import { PiCoinVerticalFill } from "react-icons/pi";

const questXpStyle = "font-bold text-4xl text-neutral0";
const questMoneyStyle = "font-bold text-4xl text-orange2 flex flex-row gap-2";
const questAttributesStyle = "flex flex-row gap-2 items-center";
const questAttributeKeyStyle = "uppercase font-bold text-sm";
const questAttributeValueStyle = "font-bold text-sm text-green2";

function QuestReward({quest}) {
    return (
        <div className="col-span-2 row-span-3">
            <h3>You will receive</h3>
            <div className={questXpStyle}>+{quest?.reward?.experience} XP</div>
            <div className={questMoneyStyle}>+{quest?.reward?.money}<PiCoinVerticalFill /></div>
            {Object.entries(quest?.reward?.attributes).filter(([key, value]) => value > 0).map(([key, value]) => (
                    <div key={key} className={questAttributesStyle}>
                        <p className={questAttributeKeyStyle}>{key}</p>
                        <p className={questAttributeValueStyle}>+{value}</p>
                    </div>
                ))
            }
            {quest?.reward?.skills?.map(skill => <p key={skill.id}>{skill.name}</p>)}
        </div>
    );
};

export default QuestReward;
