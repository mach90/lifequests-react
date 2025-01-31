const serverUrl = import.meta.env.VITE_SERVER_URL;

const guildMasterCardStyle = "relative col-span-4 row-span-6 flex justify-center items-center border-4 border-variant3 rounded-lg";
const guildMasterBackgroundStyle = "absolute inset-0 h-full w-full object-cover object-center z-0 rounded-sm";
const guildMasterNameStyle = "absolute left-0 top-0 z-20 bg-variant3 w-60 px-4 py-1 rounded-br-full text-slate-800 font-black text-lg uppercase";
const guildMasterOutputStyle = "absolute right-4 flex justify-center items-center z-20 text-white bg-gray-800 border-2 border-gray-900 rounded-lg p-10 w-[50%] h-[90%]";
const guildMasterAvatarStyle = "absolute bottom-0 left-0 h-[80%] z-10";

function GuildsMaster({ guild }) {
    return (
        <div className={guildMasterCardStyle}>
            <h3 className={guildMasterNameStyle}>Master</h3>
            <img 
                className={guildMasterAvatarStyle} 
                src={`${serverUrl}/img/guilds/default-master.png`}
            />
            <img 
                className={guildMasterBackgroundStyle} 
                src={guild.imageCover ? `${serverUrl}/img/guilds/${guild.imageCover}` : `${serverUrl}/img/guilds/default-cover.jpg`} 
            />
            <p className={guildMasterOutputStyle}>Guild Master avatar, semi animated, chatbot output</p> 
        </div>
    );
};

export default GuildsMaster;
