const skillsContainerStyle = "grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full";
const skillsCardStyle = "bg-variant4/50 col-span-3 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant4";
const skillsTitleStyle = "bg-variant4 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";

function Skills() {
    return (
        <div className={skillsContainerStyle}>
            <div className={skillsCardStyle}>
                <h2 className={skillsTitleStyle}>Skills list</h2>
                <p>Filter/Sort/search</p>
                <p>Item + train button (to add training time+xp)</p>
            </div>
            <div className={skillsCardStyle}>
                <h2 className={skillsTitleStyle}>Quests</h2>
                <p>Corresponding quests</p>
            </div>
            <div className={skillsCardStyle}>
                <h2 className={skillsTitleStyle}>Stats</h2>
                <p>Stats</p>
            </div>
            <div className={skillsCardStyle}>
                <h2 className={skillsTitleStyle}>Stats</h2>
                <p>Stats</p>
            </div>
        </div>
    );
};

export default Skills;
