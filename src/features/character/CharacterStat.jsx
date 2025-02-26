const characterStatStyle = "bg-main2 rounded-lg col-span-1 row-span-2 flex flex-row items-center justify-center gap-2 px-4";
const characterStatInfosStyle = "flex flex-col items-center w-full text-main4 text-sm uppercase font-bold"
const characterStatIconStyle = "text-main4 h-8 w-8";
const characterStatValueStyle = "text-neutral0 text-lg font-bold";

function CharacterStat({label, value, icon: IconComponent}) {
    return (
        <div className={characterStatStyle}>
            <IconComponent className={characterStatIconStyle} />
            <div className={characterStatInfosStyle}>
                {label} 
                <p className={characterStatValueStyle}>{value}</p>
            </div>
        </div>
    );
};

export default CharacterStat;
