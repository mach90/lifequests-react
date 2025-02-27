const welcomeTitlePanelStyle = "flex flex-col gap-6 justify-center items-center overflow-hidden w-[70%]";
const welcomeTitleStyle = "text-7xl font-black text-neutral0";
const welcomeSubtitleStyle = "text-xl font-bold text-green2";
const welcomeParagraphStyle = "text-lg font-normal text-main4 w-96 text-justify";

function Welcome() {
    return (
        <div className={welcomeTitlePanelStyle}>
            <img src="/logo-light.svg" alt="LifeQuests logo" />
            <h1 className={welcomeTitleStyle}>LifeQuests</h1>
            <h2 className={welcomeSubtitleStyle}>Where real life meets RPG</h2>
            <p className={welcomeParagraphStyle}>Master real skills through structured quests and guild progress, transforming your learning journey into a true RPG experience.</p>
        </div>
    );
};

export default Welcome;
