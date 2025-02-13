import Card from "../../ui/Card";
import { FaChartLine } from "react-icons/fa6";

const characterStatsCardStyle = "col-span-6 row-span-6";

function CharacterStats() {
    return (
        <div className={characterStatsCardStyle}>
            <Card title="Statistics" icon={FaChartLine }>

            </Card>
        </div>
    );
};

export default CharacterStats;
