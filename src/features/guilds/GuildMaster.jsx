const guildMasterCardStyle = "relative bg-card col-span-4 row-span-6 flex justify-center items-center";
const guildMasterOutputStyle = "absolute right-4 flex justify-center items-center z-20 text-stone-900 bg-stone-100 border-2 border-stone-900 rounded-lg p-10 w-[50%] h-[90%]";
const guildMasterAvatarStyle = "absolute bottom-0 left-0 h-[80%] z-10";
const guildMasterBackgroundStyle = "absolute inset-0 h-full w-full object-cover object-center z-0";

function GuildsMaster({ guild }) {
    return (
        <div className={guildMasterCardStyle}>
            <p className={guildMasterOutputStyle}>Guild Master avatar, semi animated, chatbot output</p> 
            <img 
                className={guildMasterAvatarStyle} 
                src={`http://127.0.0.1:3000/img/guilds/default-master.png`}
            />
            <img 
                className={guildMasterBackgroundStyle} 
                src={guild.imageCover ? `http://127.0.0.1:3000/img/guilds/${guild.imageCover}` : "http://127.0.0.1:3000/img/guilds/default-cover.jpg"} 
            />
        </div>
    );
};

export default GuildsMaster;
