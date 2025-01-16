const guildsMasterCardStyle = "relative bg-card col-span-6 row-span-6 flex justify-center items-center";
const guildsMasterH1Style = "absolute flex justify-center items-center z-20 text-white bg-black";
const guildsMasterAvatarStyle = "absolute bottom-0 left-0 h-[80%] z-10";
const guildsMasterBackgroundStyle = "absolute inset-0 h-full w-full object-cover object-center z-0";

function GuildsMaster({ currentGuild }) {
    return (
        <div className={guildsMasterCardStyle}>
            <h1 className={guildsMasterH1Style}>Guild Master avatar, semi animated, chatbot output</h1> 
            <img 
                className={guildsMasterAvatarStyle} 
                src={`http://127.0.0.1:3000/img/guilds/default-master.png`}
            />
            <img 
                className={guildsMasterBackgroundStyle} 
                src={currentGuild.imageCover ? `http://127.0.0.1:3000/img/guilds/${currentGuild.imageCover}` : "http://127.0.0.1:3000/img/guilds/default-cover.jpg"} 
            />
        </div>
    );
};

export default GuildsMaster;
