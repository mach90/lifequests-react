import Card from "../../ui/Card";
import { FaBookBookmark } from "react-icons/fa6";

const characterTrackedQuestsContainerStyle = "col-span-3 row-span-full";

function CharacterTrackedQuests() {
    return (
        <div className={characterTrackedQuestsContainerStyle}>
            <Card title="Tracked Contracts" icon={FaBookBookmark}>
            
            </Card>
        </div>
    );
};

export default CharacterTrackedQuests;
