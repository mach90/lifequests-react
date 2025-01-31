const serverUrl = import.meta.env.VITE_SERVER_URL;

const guildTitleCardStyle = "bg-variant3 px-4 py-2 col-span-4 row-span-1 text-slate-800 flex justify-between items-center rounded-full";
const guildTitleDivStyle = "flex flex-row gap-2 justify-center items-center";
const guildEmblemStyle = "w-6 h-6";
const guildTitleH1Style = "text-slate-800 font-black text-2xl uppercase";
const guildTitleH2Style = "text-slate-800 font-semi-bold text-lg uppercase";

function GuildTitle({ guild }) {
    return (
        <div className={guildTitleCardStyle}>
            <div className={guildTitleDivStyle}>
                <img 
                    className={guildEmblemStyle} 
                    src={guild.images[0] ? `${serverUrl}/img/guilds/${guild.images[0]}` : `${serverUrl}/img/guilds/default-emblem.png`} 
                />
                <h1 className={guildTitleH1Style}>{guild.name} Guild</h1>
            </div>
            <h2 className={guildTitleH2Style}>{guild.company.name}</h2>
        </div>
    );
};

export default GuildTitle;
