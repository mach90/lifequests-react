const guildProgressCardStyle = "bg-card col-span-3 row-span-3 text-white flex justify-center items-center";

function GuildProgress({ guild }) {
    return (
        <div className={guildProgressCardStyle}>
            Guild progress (level)
        </div>
    );
};

export default GuildProgress;
