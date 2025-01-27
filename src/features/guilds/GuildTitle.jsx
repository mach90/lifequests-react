const guildTitleCardStyle = "col-span-4 row-span-1 text-white flex justify-between items-center";
const guildTitleDivStyle = "flex flex-row gap-2 justify-center items-center";
const guildEmblemStyle = "w-6 h-6";
const guildTitleH1Style = "text-white font-black text-2xl";
const guildTitleH2Style = "text-white font-semi-bold text-lg";

function GuildTitle({ guild }) {
    return (
        <div className={guildTitleCardStyle}>
            <div className={guildTitleDivStyle}>
                <img 
                    className={guildEmblemStyle} 
                    src={guild.images[0] ? `http://127.0.0.1:3000/img/guilds/${guild.images[0]}` : "http://127.0.0.1:3000/img/guilds/default-emblem.png"} 
                />
                <h1 className={guildTitleH1Style}>{guild.name} Guild</h1>
            </div>
            <h2 className={guildTitleH2Style}>{guild.company.name}</h2>
        </div>
    );
};

export default GuildTitle;
