const characterAttributesCardStyle = "bg-variant1/50 col-span-3 row-span-6 flex justify-start items-center flex-col rounded-lg border-4 border-variant1";
const characterAttributesTitleStyle = "bg-variant1 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";
const characterAttributesListStyle = "flex flex-row justify-between w-full h-full";
const characterAttributesListSectionStyle = "flex flex-col gap-2 p-4 w-full";
const characterAttributesListSectionTitleStyle = "text-white font-bold text-center";
const characterAttributesListItemStyle = "text-base flex flex-row justify-between border-b-2 border-transparent";
const characterAttributesListItemDescriptionStyle = "flex flex-row gap-2 items-center justify-start w-full";
const characterAttributesTagStyle = "bg-black flex items-center justify-center pr-1 text-xs text-center italic w-10 font-black border-l-6 h-5 clip-right-diagonal";
const characterAttributesNameStyle = "text-black text-sm w-26 font-bold clip-left-point-opposite uppercase border-b-4 border-black";
const characterAttributesValueStyle = "bg-black px-2 text-variant1 text-center italic font-bold clip-left-point w-full";

function CharacterAttributes({data}) {
    return (
        <div className={characterAttributesCardStyle}>
            <h2 className={characterAttributesTitleStyle}>Attributes</h2>
            <div className={characterAttributesListStyle}>
                <div className={characterAttributesListSectionStyle}>
                    <h3 className={characterAttributesListSectionTitleStyle}>Physical</h3>
                    <div className={characterAttributesListItemStyle}>
                        <div className={characterAttributesListItemDescriptionStyle}>
                            <div className={`${characterAttributesTagStyle} border-[#cb364d] text-[#cb364d]`}>STR</div>
                            <p className={characterAttributesNameStyle}>Strength</p>
                        </div>
                        <div className={characterAttributesValueStyle}>{data?.attributes?.strength}</div>
                    </div>
                    <div className={characterAttributesListItemStyle}>
                        <div className={characterAttributesListItemDescriptionStyle}>
                            <div className={`${characterAttributesTagStyle} border-[#e96745] text-[#e96745]`}>STA</div> 
                            <p className={characterAttributesNameStyle}>Stamina</p>
                        </div>
                        <div className={characterAttributesValueStyle}>{data?.attributes?.stamina}</div>
                    </div>
                    <div className={characterAttributesListItemStyle}>
                        <div className={characterAttributesListItemDescriptionStyle}>
                            <div className={`${characterAttributesTagStyle} border-[#e7f49d] text-[#e7f49d]`}>DEX</div> 
                            <p className={characterAttributesNameStyle}>Dexterity</p>
                        </div> 
                        <div className={characterAttributesValueStyle}>{data?.attributes?.dexterity}</div>
                    </div>
                    <div className={characterAttributesListItemStyle}>
                        <div className={characterAttributesListItemDescriptionStyle}>
                            <div className={`${characterAttributesTagStyle} border-[#fade93] text-[#fade93]`}>SPD</div> 
                            <p className={characterAttributesNameStyle}>Speed</p>
                        </div> 
                        <div className={characterAttributesValueStyle}>{data?.attributes?.speed}</div>
                    </div>
                    <div className={characterAttributesListItemStyle}>
                        <div className={characterAttributesListItemDescriptionStyle}>
                            <div className={`${characterAttributesTagStyle} border-[#9a0040] text-[#9a0040]`}>VIT</div> 
                            <p className={characterAttributesNameStyle}>Vitality</p>
                        </div> 
                        <div className={characterAttributesValueStyle}>{data?.attributes?.vitality}</div>
                    </div>
                    <div className={characterAttributesListItemStyle}>
                        <div className={characterAttributesListItemDescriptionStyle}>
                            <div className={`${characterAttributesTagStyle} border-[#f2a867] text-[#f2a867]`}>AGI</div> 
                            <p className={characterAttributesNameStyle}>Agility</p>
                        </div> 
                        <div className={characterAttributesValueStyle}>{data?.attributes?.agility}</div>
                    </div>
                </div>
                <div className={characterAttributesListSectionStyle}>
                    <h3 className={characterAttributesListSectionTitleStyle}>Mental</h3>
                    <div className={characterAttributesListItemStyle}>
                        <div className={characterAttributesListItemDescriptionStyle}>
                            <div className={`${characterAttributesTagStyle} border-[#5c529e] text-[#5c529e]`}>INT</div> 
                            <p className={characterAttributesNameStyle}>Intelligence</p>
                        </div> 
                        <div className={characterAttributesValueStyle}>{data?.attributes?.intelligence}</div>
                    </div>
                    <div className={characterAttributesListItemStyle}>
                        <div className={characterAttributesListItemDescriptionStyle}>
                            <div className={`${characterAttributesTagStyle} border-[#d76fa9] text-[#d76fa9]`}>CHA</div> 
                            <p className={characterAttributesNameStyle}>Charisma</p>
                        </div> 
                        <div className={characterAttributesValueStyle}>{data?.attributes?.charisma}</div>
                    </div>
                    <div className={characterAttributesListItemStyle}>
                        <div className={characterAttributesListItemDescriptionStyle}>
                            <div className={`${characterAttributesTagStyle} border-[#64b799] text-[#64b799]`}>WIS</div> 
                            <p className={characterAttributesNameStyle}>Wisdom</p>
                        </div> 
                        <div className={characterAttributesValueStyle}>{data?.attributes?.wisdom}</div>
                    </div>
                    <div className={characterAttributesListItemStyle}>
                        <div className={characterAttributesListItemDescriptionStyle}>
                            <div className={`${characterAttributesTagStyle} border-[#448aba] text-[#448aba]`}>PER</div> 
                            <p className={characterAttributesNameStyle}>Perception</p>
                        </div> 
                        <div className={characterAttributesValueStyle}>{data?.attributes?.perception}</div>
                    </div>
                    <div className={characterAttributesListItemStyle}>
                        <div className={characterAttributesListItemDescriptionStyle}>
                            <div className={`${characterAttributesTagStyle} border-[#b1dda9] text-[#b1dda9]`}>FOC</div> 
                            <p className={characterAttributesNameStyle}>Focus</p>
                        </div> 
                        <div className={characterAttributesValueStyle}>{data?.attributes?.focus}</div>
                    </div>
                    <div className={characterAttributesListItemStyle}>
                        <div className={characterAttributesListItemDescriptionStyle}>
                            <div className={`${characterAttributesTagStyle} border-[#9beae7] text-[#9beae7]`}>WIL</div> 
                            <p className={characterAttributesNameStyle}>Willpower</p>
                        </div> 
                        <div className={characterAttributesValueStyle}>{data?.attributes?.willpower}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterAttributes;
