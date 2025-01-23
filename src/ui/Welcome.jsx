const welcomeTitlePanelStyle = "flex flex-col gap-6 justify-center items-center overflow-hidden w-[70%]";
const welcomeTitleStyle = "text-7xl font-black text-white";
const welcomeSubtitleStyle = "text-xl font-black text-white";
const welcomeParagraphStyle = "text-lg font-normal text-white w-96 text-justify";

function Welcome() {
    return (
        <div className={welcomeTitlePanelStyle}>
            <h1 className={welcomeTitleStyle}>LifeQuests</h1>
            <h2 className={welcomeSubtitleStyle}>Where real life meets RPG</h2>
            <p className={welcomeParagraphStyle}>Master real skills through structured quests and guild progress, transforming your learning journey into a true RPG experience.</p>
        </div>
    );
};

export default Welcome;
