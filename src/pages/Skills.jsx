import Card from "../ui/Card";

const skillsContainerStyle = "grid grid-flow-col grid-cols-12 grid-rows-12 gap-4 h-full";
const skillsCardContainerStyle = "col-span-3 row-span-full"; //temporary

function Skills() {
    return (
        <div className={skillsContainerStyle}>
            <div className={skillsCardContainerStyle}>
                <Card title="Skills List">
                </Card>
            </div>
            <div className={skillsCardContainerStyle}>
                <Card title="Skill">
                </Card>
            </div>
            <div className={skillsCardContainerStyle}>
                <Card title="Stats">
                </Card>
            </div>
            <div className={skillsCardContainerStyle}>
                <Card title="Stats">
                </Card>
            </div>
        </div>
    );
};

export default Skills;
