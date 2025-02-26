import { useRecentContracts } from "../contracts/useRecentContracts";
import Card from "../../ui/Card";
import LoadingSpinner from "../../ui/LoadingSpinner";
import CharacterStat from "./CharacterStat";
import { FaChartLine, FaFileContract } from "react-icons/fa6";
import { PiCoinVerticalFill, PiSphereFill } from "react-icons/pi";
import { TbHexagonLetterAFilled, TbHexagonLetterXFilled  } from "react-icons/tb";
import CharacterStatsChart from "./CharacterStatsChart";

const characterStatsCardStyle = "col-span-6 row-span-6";
const layoutStyle = "h-full grid grid-flow-col grid-cols-5 grid-rows-6 gap-4";

function CharacterStats() {
    const {isPending, contracts, totalCount, perDayStats, averageStats, error} = useRecentContracts();

    let totalExperienceEarned = 0;
    let totalMoneyEarned = 0;
    let totalAttributesPointsEarned = 0;
    let totalSkillsAcquired = 0;

    if(contracts) {
        contracts.forEach(contract => {
            totalExperienceEarned += contract.quest.reward.experience;
            totalMoneyEarned += contract.quest.reward.money;
            totalAttributesPointsEarned += Object.values(contract.quest.reward.attributes).reduce((acc, val) => acc + val, 0);
            totalSkillsAcquired += contract.quest.reward.skills.length;
        });
    }

    return (
        <div className={characterStatsCardStyle}>
            <Card title="Statistics" icon={FaChartLine} filter="Stats">
                {isPending && <LoadingSpinner size="md" />}
                
                {!isPending && <div className={layoutStyle}>
                    {!isPending && <CharacterStat label="Contracts" value={totalCount} icon={FaFileContract} />}
                    {!isPending && <CharacterStat label="Experience" value={totalExperienceEarned} icon={TbHexagonLetterXFilled} />}
                    {!isPending && <CharacterStat label="Money" value={totalMoneyEarned} icon={PiCoinVerticalFill} />}
                    {!isPending && <CharacterStat label="Attr. Points" value={totalAttributesPointsEarned} icon={TbHexagonLetterAFilled} />}
                    {!isPending && <CharacterStat label="Skills" value={totalSkillsAcquired} icon={PiSphereFill} />}
                    {!isPending && <CharacterStatsChart perDayStats={perDayStats} averageStats={averageStats} />}
                </div>}
            </Card>
        </div>
    );
};

export default CharacterStats;
