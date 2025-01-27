const guildChatbotInputCardStyle = "bg-card flex flex-col col-span-4 row-span-5 text-white flex justify-center items-center p-4";
const guildChatbotInputTextAreaStyle = "bg-gray-800 p-4 w-full h-full resize-none";
const guildChatbotInputButtonStyle = "bg-blue-500 text-white w-full p-2 mt-2";

function GuildChatbotInput({ guild }) {
    return (
        <div className={guildChatbotInputCardStyle}>
            <textarea type="text" className={guildChatbotInputTextAreaStyle} placeholder="Chatbot input not yet implemented..." />
            <button className={guildChatbotInputButtonStyle}>Send</button>
        </div>
    );
};

export default GuildChatbotInput;
