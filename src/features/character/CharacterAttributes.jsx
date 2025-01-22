const characterAttributesCardStyle = "bg-card col-span-3 row-span-6 text-white flex justify-center items-center flex-col";
const characterAttributesListStyle = "w-60";
const characterAttributesListItemStyle = "flex flex-row justify-between border-b border-slate-800";
const characterAttributesListItemDescriptionStyle = "flex flex-row gap-2 items-center justify-start";
const characterAttributesTagStyle = "px-1 rounded-md text-xs text-center italic w-10 text-gray-900 font-black shadow-md border border-gray-900";
const characterAttributesNameStyle = "font-bold";
const characterAttributesValueStyle = "italic font-bold";

function CharacterAttributes({data}) {
    return (
        <div className={characterAttributesCardStyle}>
            <div className={characterAttributesListStyle}>
                <div className={characterAttributesListItemStyle}>
                    <div className={characterAttributesListItemDescriptionStyle}>
                        <div className={`${characterAttributesTagStyle} bg-[#cb364d]`}>STR</div>
                        <p className={characterAttributesNameStyle}>Strength</p>
                    </div>
                    <div className={characterAttributesValueStyle}>{data?.attributes?.strength} 💪</div>
                </div>
                <div className={characterAttributesListItemStyle}>
                    <div className={characterAttributesListItemDescriptionStyle}>
                        <div className={`${characterAttributesTagStyle} bg-[#e96745]`}>STA</div> 
                        <p className={characterAttributesNameStyle}>Stamina</p>
                    </div>
                    <div className={characterAttributesValueStyle}>{data?.attributes?.stamina} 🔋</div>
                </div>
                <div className={characterAttributesListItemStyle}>
                    <div className={characterAttributesListItemDescriptionStyle}>
                        <div className={`${characterAttributesTagStyle} bg-[#e7f49d]`}>DEX</div> 
                        <p className={characterAttributesNameStyle}>Dexterity</p>
                    </div> 
                    <div className={characterAttributesValueStyle}>{data?.attributes?.dexterity} 🤚</div>
                </div>
                <div className={characterAttributesListItemStyle}>
                    <div className={characterAttributesListItemDescriptionStyle}>
                        <div className={`${characterAttributesTagStyle} bg-[#fade93]`}>SPD</div> 
                        <p className={characterAttributesNameStyle}>Speed</p>
                    </div> 
                    <div className={characterAttributesValueStyle}>{data?.attributes?.speed} ⚡</div>
                </div>
                <div className={characterAttributesListItemStyle}>
                    <div className={characterAttributesListItemDescriptionStyle}>
                        <div className={`${characterAttributesTagStyle} bg-[#9a0040]`}>VIT</div> 
                        <p className={characterAttributesNameStyle}>Vitality</p>
                    </div> 
                    <div className={characterAttributesValueStyle}>{data?.attributes?.vitality} ❤️</div>
                </div>
                <div className={characterAttributesListItemStyle}>
                    <div className={characterAttributesListItemDescriptionStyle}>
                        <div className={`${characterAttributesTagStyle} bg-[#f2a867]`}>AGI</div> 
                        <p className={characterAttributesNameStyle}>Agility</p>
                    </div> 
                    <div className={characterAttributesValueStyle}>{data?.attributes?.agility} 🤸</div>
                </div>
                <div className={characterAttributesListItemStyle}>
                    <div className={characterAttributesListItemDescriptionStyle}>
                        <div className={`${characterAttributesTagStyle} bg-[#5c529e]`}>INT</div> 
                        <p className={characterAttributesNameStyle}>Intelligence</p>
                    </div> 
                    <div className={characterAttributesValueStyle}>{data?.attributes?.intelligence} 🧠</div>
                </div>
                <div className={characterAttributesListItemStyle}>
                    <div className={characterAttributesListItemDescriptionStyle}>
                        <div className={`${characterAttributesTagStyle} bg-[#d76fa9]`}>CHA</div> 
                        <p className={characterAttributesNameStyle}>Charisma</p>
                    </div> 
                    <div className={characterAttributesValueStyle}>{data?.attributes?.charisma} 🗣️</div>
                </div>
                <div className={characterAttributesListItemStyle}>
                    <div className={characterAttributesListItemDescriptionStyle}>
                        <div className={`${characterAttributesTagStyle} bg-[#64b799]`}>WIS</div> 
                        <p className={characterAttributesNameStyle}>Wisdom</p>
                    </div> 
                    <div className={characterAttributesValueStyle}>{data?.attributes?.wisdom} ⚖️</div>
                </div>
                <div className={characterAttributesListItemStyle}>
                    <div className={characterAttributesListItemDescriptionStyle}>
                        <div className={`${characterAttributesTagStyle} bg-[#448aba]`}>PER</div> 
                        <p className={characterAttributesNameStyle}>Perception</p>
                    </div> 
                    <div className={characterAttributesValueStyle}>{data?.attributes?.perception} 👁️</div>
                </div>
                <div className={characterAttributesListItemStyle}>
                    <div className={characterAttributesListItemDescriptionStyle}>
                        <div className={`${characterAttributesTagStyle} bg-[#b1dda9]`}>FOC</div> 
                        <p className={characterAttributesNameStyle}>Focus</p>
                    </div> 
                    <div className={characterAttributesValueStyle}>{data?.attributes?.focus} 🎯</div>
                </div>
                <div className={characterAttributesListItemStyle}>
                    <div className={characterAttributesListItemDescriptionStyle}>
                        <div className={`${characterAttributesTagStyle} bg-[#9beae7]`}>WIL</div> 
                        <p className={characterAttributesNameStyle}>Willpower</p>
                    </div> 
                    <div className={characterAttributesValueStyle}>{data?.attributes?.willpower} 🧘‍♂️</div>
                </div>
            </div>
        </div>
    );
};

export default CharacterAttributes;
