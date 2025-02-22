const characterAttributesListItemStyle = "w-full h-max flex flex-row justify-between items-center px-2 py-1 bg-main2";
const characterAttributesListItemDescriptionStyle = "w-max h-max flex flex-row gap-1 justify-start items-center";
const characterAttributesNameStyle = "text-neutral0 font-bold uppercase";
const characterAttributesMaxValueStyle = "font-bold text-base text-neutral0";

function CharacterAttribute({ data, attributeShort, attributeName }) {
    let characterAttributesTagStyle = "uppercase w-6 text-main1 bg-neutral0 text-xs font-bold text-center";
    let characterAttributesValueStyle = "font-bold text-base text-neutral0";

    if(attributeName.toLowerCase() === "strength") {
        characterAttributesTagStyle = "uppercase w-6 text-main1 bg-strength text-xs font-bold text-center";
        characterAttributesValueStyle = "font-bold text-base text-strength";
    }
    if(attributeName.toLowerCase() === "stamina") {
        characterAttributesTagStyle = "uppercase w-6 text-main1 bg-stamina text-xs font-bold text-center";
        characterAttributesValueStyle = "font-bold text-base text-stamina";
    }
    if(attributeName.toLowerCase() === "dexterity") {
        characterAttributesTagStyle = "uppercase w-6 text-main1 bg-dexterity text-xs font-bold text-center";
        characterAttributesValueStyle = "font-bold text-base text-dexterity";
    }
    if(attributeName.toLowerCase() === "speed") {
        characterAttributesTagStyle = "uppercase w-6 text-main1 bg-speed text-xs font-bold text-center";
        characterAttributesValueStyle = "font-bold text-base text-speed";
    }
    if(attributeName.toLowerCase() === "vitality") {
        characterAttributesTagStyle = "uppercase w-6 text-main1 bg-vitality text-xs font-bold text-center";
        characterAttributesValueStyle = "font-bold text-base text-vitality";
    }
    if(attributeName.toLowerCase() === "agility") {
        characterAttributesTagStyle = "uppercase w-6 text-main1 bg-agility text-xs font-bold text-center";
        characterAttributesValueStyle = "font-bold text-base text-agility";
    }
    if(attributeName.toLowerCase() === "intelligence") {
        characterAttributesTagStyle = "uppercase w-6 text-main1 bg-intelligence text-xs font-bold text-center";
        characterAttributesValueStyle = "font-bold text-base text-intelligence";
    }
    if(attributeName.toLowerCase() === "charisma") {
        characterAttributesTagStyle = "uppercase w-6 text-main1 bg-charisma text-xs font-bold text-center";
        characterAttributesValueStyle = "font-bold text-base text-charisma";
    }
    if(attributeName.toLowerCase() === "wisdom") {
        characterAttributesTagStyle = "uppercase w-6 text-main1 bg-wisdom text-xs font-bold text-center";
        characterAttributesValueStyle = "font-bold text-base text-wisdom";
    }
    if(attributeName.toLowerCase() === "perception") {
        characterAttributesTagStyle = "uppercase w-6 text-main1 bg-perception text-xs font-bold text-center";
        characterAttributesValueStyle = "font-bold text-base text-perception";
    }
    if(attributeName.toLowerCase() === "focus") {
        characterAttributesTagStyle = "uppercase w-6 text-main1 bg-focus text-xs font-bold text-center";
        characterAttributesValueStyle = "font-bold text-base text-focus";
    }
    if(attributeName.toLowerCase() === "willpower") {
        characterAttributesTagStyle = "uppercase w-6 text-main1 bg-willpower text-xs font-bold text-center";
        characterAttributesValueStyle = "font-bold text-base text-willpower";
    }

    return (
        <div className={characterAttributesListItemStyle}>
            <div className={characterAttributesListItemDescriptionStyle}>
                <div className={characterAttributesTagStyle}>
                    {attributeShort}
                </div>
                <p className={characterAttributesNameStyle}>
                    {attributeName}
                </p>
            </div>
            {data === 100 ? <div className={characterAttributesMaxValueStyle}>MAX</div> : <div className={characterAttributesValueStyle}>{data}</div>}
        </div>
    );
};

export default CharacterAttribute;