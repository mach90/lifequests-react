const guildsTitleCardStyle = "col-span-4 row-span-1 text-white flex justify-between items-center";
const guildsTitleDivStyle = "flex flex-row gap-2 justify-center items-center";
const guildsEmblemStyle = "w-6 h-6";
const guildsTitleH1Style = "text-white font-black text-2xl";
const guildsTitleH2Style = "text-white font-semi-bold text-lg";

function GuildsTitle({ currentGuild }) {
    return (
        <div className={guildsTitleCardStyle}>
            <div className={guildsTitleDivStyle}>
                <img 
                    className={guildsEmblemStyle} 
                    src={currentGuild.images[0] ? `http://127.0.0.1:3000/img/guilds/${currentGuild.images[0]}` : "http://127.0.0.1:3000/img/guilds/default-emblem.png"} 
                />
                <h1 className={guildsTitleH1Style}>{currentGuild.name} Guild</h1>
            </div>
            <h2 className={guildsTitleH2Style}>{currentGuild.company.name}</h2>
        </div>
    );
};

export default GuildsTitle;
