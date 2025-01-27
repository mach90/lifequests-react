const guildDescriptionCardStyle = "bg-card col-span-3 row-span-3 text-white flex justify-center items-center";

function GuildDescription({ guild }) {
    return (
        <div className={guildDescriptionCardStyle}>
            {guild ?guild.description : "No description"}
        </div>
    );
};

export default GuildDescription;
