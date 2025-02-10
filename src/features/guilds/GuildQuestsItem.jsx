import { NavLink } from "react-router-dom";
import DifficultyTag from "../../ui/DifficultyTag";

const guildQuestsListItemStyle = "bg-main3 hover:-translate-y-0.5 hover:rotate-2 hover:scale-105 duration-400 shadow-lg shadow-main1 flex flex-col gap-2 p-4 h-40 w-40 justify-between items-center";
const guildQuestsListItemNameStyle = "flex flex-row gap-2 text-base text-white font-bold uppercase";

function GuildQuestsItem({ quest, contracts }) {
    const hasContract = contracts.some(contract => contract.quest.id === quest.id);
    const contractFinished = contracts.some(contract => contract.quest.id === quest.id && contract.status === "finished");

    return (
        <NavLink to={`/quests/${quest.id}`}>
            <div key={quest.id} className={guildQuestsListItemStyle}>
                {hasContract && !contractFinished && <p className="bg-blue1 text-blue2 px-2">ACTIVE</p>}
                {contractFinished && <p className="bg-green1 text-green2 px-2">FINISHED</p>}
                <div className={guildQuestsListItemNameStyle}>{quest.name}</div>
                <DifficultyTag difficulty={quest.difficulty} />
            </div>
        </NavLink>
    );
};

export default GuildQuestsItem;
