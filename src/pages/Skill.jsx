import { useParams } from "react-router-dom";
import {useSkill} from "../features/skills/useSkill";
import LoadingSpinner from "../ui/LoadingSpinner";
import Card from "../ui/Card";

const skillContainerStyle = "grid grid-flow-col grid-cols-10 grid-rows-12 gap-4 text-white w-full h-full";
const skillDetailsStyle = "col-span-full row-span-full";

function Skill() {
    const {skillId} = useParams();

    const {isPending, skill, error} = useSkill(skillId);

    return (
        <div className={skillContainerStyle}>
            <div className={skillDetailsStyle}>
                <Card title={skill?.name} legend={`${skill?.category} skill`}>
                    {isPending && <LoadingSpinner size="md" />}
                    {!isPending && <div className="flex flex-col gap-4 text-main4 text-justify">
                        <p>{skill.description}</p>
                    </div>}
                </Card>
            </div>
        </div>
    );
};

export default Skill;