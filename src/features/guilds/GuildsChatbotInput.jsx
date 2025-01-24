const guildsChatbotInputCardStyle = "bg-card flex flex-col col-span-4 row-span-5 text-white flex justify-center items-center p-4";
const guildsChatbotInputTextAreaStyle = "bg-gray-800 p-4 w-full h-full resize-none";
const guildsChatbotInputButtonStyle = "bg-blue-500 text-white w-full p-2 mt-2";

function GuildsChatbotInput({ currentGuild }) {
    return (
        <div className={guildsChatbotInputCardStyle}>
            <textarea type="text" className={guildsChatbotInputTextAreaStyle} placeholder="Chatbot input not yet implemented..." />
            <button className={guildsChatbotInputButtonStyle}>Send</button>
        </div>
    );
};

export default GuildsChatbotInput;
