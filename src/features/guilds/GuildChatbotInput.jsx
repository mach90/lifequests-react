const guildChatbotInputCardStyle = "bg-variant3/50 flex flex-col col-span-4 row-span-5 text-white flex justify-center items-center p-4 rounded-lg border-4 border-variant3";
const guildChatbotInputTextAreaStyle = "bg-gray-800 text-white p-4 w-full h-full resize-none rounded-t-md";
const guildChatbotInputButtonStyle = "bg-variant3 text-white w-full p-2 mt-2 rounded-b-md";

function GuildChatbotInput({ guild }) {
    return (
        <div className={guildChatbotInputCardStyle}>
            <textarea type="text" className={guildChatbotInputTextAreaStyle} placeholder="Chatbot input not yet implemented..." />
            <button className={guildChatbotInputButtonStyle}>Send</button>
        </div>
    );
};

export default GuildChatbotInput;
