const GuildsTitleCardStyle = "col-span-6 row-span-1 text-white flex justify-between items-center";
const GuildsTitleH1Style = "text-white font-black text-2xl";
const GuildsTitleH2Style = "text-white font-semi-bold text-lg";

function GuildsTitle({ currentGuild }) {
    return (
        <div className={GuildsTitleCardStyle}>
            <h1 className={GuildsTitleH1Style}>{currentGuild.name} Guild</h1>
            <h2 className={GuildsTitleH2Style}>{currentGuild.company.name}</h2>
        </div>
    );
};

export default GuildsTitle;
