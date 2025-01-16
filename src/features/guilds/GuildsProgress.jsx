const guildsProgressCardStyle = "bg-card col-span-3 row-span-4 text-white flex justify-center items-center";

function GuildsProgress({ currentGuild }) {
    return (
        <div className={guildsProgressCardStyle}>
            Guild progress (level)
        </div>
    );
};

export default GuildsProgress;
