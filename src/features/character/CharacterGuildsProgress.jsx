const characterGuildsProgressCardStyle = "bg-variant1/50 col-span-6 row-span-6 flex justify-start items-center flex-col rounded-lg border-4 border-variant1";
const characterGuildsProgressTitleStyle = "bg-variant1 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";

function CharacterGuildsProgress() {
    return (
        <div className={characterGuildsProgressCardStyle}>
            <h2 className={characterGuildsProgressTitleStyle}>Guilds progress</h2>
        </div>
    );
};

export default CharacterGuildsProgress;
