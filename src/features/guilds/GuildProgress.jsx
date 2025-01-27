const guildProgressCardStyle = "bg-variant3/50 col-span-3 row-span-3 text-white flex justify-center items-center rounded-lg border-4 border-variant3";

function GuildProgress({ guild }) {
    return (
        <div className={guildProgressCardStyle}>
            Guild progress (level)
        </div>
    );
};

export default GuildProgress;
