import { Outlet } from "react-router-dom";
import SkillsMenu from "../features/skills/SkillsMenu";

const skillsContainerStyle = "grid grid-flow-col grid-cols-12 grid-rows-12 gap-4 h-full";
const skillsOutletContainerStyle = "col-span-9 row-span-full text-white flex justify-center items-center";

function Skills() {
    return (
        <div className={skillsContainerStyle}>
            <SkillsMenu />
            <div className={skillsOutletContainerStyle}>
                <Outlet />
            </div>
        </div>
    );
};

export default Skills;
