const guildDescriptionCardStyle = "bg-variant3/50 col-span-3 row-span-3 text-white flex justify-center items-center rounded-lg border-4 border-variant3";

function GuildDescription({ guild }) {
    return (
        <div className={guildDescriptionCardStyle}>
            {guild ?guild.description : "No description"}
        </div>
    );
};

export default GuildDescription;
