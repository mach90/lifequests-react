import { NavLink } from "react-router-dom";
import { FaInfoCircle, FaScroll } from "react-icons/fa";
import DifficultyTag from "../../ui/DifficultyTag";

const guildQuestsListItemStyle = "bg-variant3 flex flex-col gap-2 p-4 w-68 h-40 justify-between items-center";
const guildQuestsListItemNameStyle = "flex flex-row gap-2 text-base text-white font-bold uppercase";
const guildQuestsListItemIconStyle = "text-3xl border-2 p-1 rounded-full border-white";

function GuildQuestsItem({ quest }) {
    return (
        <div key={quest.id} className={guildQuestsListItemStyle}>
            <div className={guildQuestsListItemNameStyle}>{quest.name}</div>
            <DifficultyTag difficulty={quest.difficulty} />
            <div className="flex flex-row gap-4">
                <div className={guildQuestsListItemIconStyle}><FaInfoCircle /></div>
                <div className={guildQuestsListItemIconStyle}><NavLink to={`/quests/${quest.id}`}><FaScroll /></NavLink></div>
            </div>
        </div>
    );
};

export default GuildQuestsItem;
