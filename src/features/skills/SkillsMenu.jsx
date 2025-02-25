import { useSkills } from "./useSkills";
import { useSkillset } from "../skillsets/useSkillset";
import LoadingSpinner from "../../ui/LoadingSpinner";
import CardMenu from "../../ui/CardMenu";
import SkillLink from "./SkillLink";
import { ImTree } from "react-icons/im";

const skillsMenuContainerStyle = "col-span-3 row-span-full";
const skillsListStyle = "overflow-scroll flex flex-col gap-2 justify-start items-center flex-col w-full p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-variant6 [&::-webkit-scrollbar-thumb]:hover:bg-variant6 [&::-webkit-scrollbar:horizontal]:hidden";

function SkillsMenu() {
    const {isPending: loadingSkills, skills, totalCount, results, error: errorSkills} = useSkills();

    const {isPending: loadingSkillset, skillset, error: errorSkillset} = useSkillset();

    return (
        <div className={skillsMenuContainerStyle}>
            <CardMenu title="Skills" icon={ImTree} sort="Skills" filter="Skills" pagination={true} totalCount={totalCount} results={results}>
                {loadingSkills || loadingSkillset && <LoadingSpinner size="sm" />}

                {!loadingSkills && !loadingSkillset && <div className={skillsListStyle}>
                    {skills?.map(skill => {
                            const mySkills = skillset.skillset.skills;
                            const acquired = mySkills.some(mySkill => mySkill.id === skill.id);

                            return <SkillLink key={skill.id} skillId={skill.id} name={skill.name} category={skill.category} level={skill.level} acquired={acquired} />
                        }
                    )}
                </div>}
            </CardMenu>
        </div>
    );
};

export default SkillsMenu;