import { useSkills } from "./useSkills";
import LoadingSpinner from "../../ui/LoadingSpinner";
import CardMenu from "../../ui/CardMenu";
import SkillLink from "./SkillLink";
import { ImTree } from "react-icons/im";

const skillsMenuContainerStyle = "col-span-3 row-span-full";
const skillsListStyle = "overflow-scroll flex flex-col gap-2 justify-start items-center flex-col w-full p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-variant6 [&::-webkit-scrollbar-thumb]:hover:bg-variant6 [&::-webkit-scrollbar:horizontal]:hidden";

function SkillsMenu() {
    const {isPending, skills, totalCount, results, error} = useSkills();

    return (
        <div className={skillsMenuContainerStyle}>
            <CardMenu title="Skills" icon={ImTree} sort="Skills" filter="Skills" pagination={true} totalCount={totalCount} results={results}>
                {isPending && <LoadingSpinner size="sm" />}

                {!isPending && <div className={skillsListStyle}>
                    {skills?.map(skill => <SkillLink key={skill.id} skillId={skill.id} name={skill.name} />)}
                </div>}
            </CardMenu>
        </div>
    );
};

export default SkillsMenu;