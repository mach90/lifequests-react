import Card from "../../ui/Card";
import CharacterAttribute from "./CharacterAttribute";

const characterAttributesContainerStyle = "col-span-3 row-span-6";
const characterAttributesListContainerStyle = "w-full h-full flex flex-row justify-between items-start";
const characterAttributesListSectionStyle = "w-full h-full flex flex-col justify-between items-center p-2.5";
const characterAttributesListSectionTitleStyle = "text-sm text-main4 font-bold";

function CharacterAttributes({data}) {
    return (
        <div className={characterAttributesContainerStyle}>
            <Card title="Attributes">
                <div className={characterAttributesListContainerStyle}>
                    <div className={characterAttributesListSectionStyle}>
                        <h3 className={characterAttributesListSectionTitleStyle}>Physical attributes</h3>
                        <CharacterAttribute key="str" data={data?.attributes?.strength} attributeShort="STR" attributeName="Strength" />
                        <CharacterAttribute key="sta" data={data?.attributes?.stamina} attributeShort="STA" attributeName="Stamina" />
                        <CharacterAttribute data={data?.attributes?.vitality} attributeShort="VIT" attributeName="Vitality" />
                        <CharacterAttribute data={data?.attributes?.speed} attributeShort="SPD" attributeName="Speed" />
                        <CharacterAttribute data={data?.attributes?.dexterity} attributeShort="DEX" attributeName="Dexterity" />
                        <CharacterAttribute data={data?.attributes?.agility} attributeShort="AGI" attributeName="Agility" />
                    </div>
                    <div className={characterAttributesListSectionStyle}>
                        <h3 className={characterAttributesListSectionTitleStyle}>Mental attributes</h3>
                        <CharacterAttribute data={data?.attributes?.intelligence} attributeShort="INT" attributeName="Intelligence" />
                        <CharacterAttribute data={data?.attributes?.charisma} attributeShort="CHA" attributeName="Charisma" />
                        <CharacterAttribute data={data?.attributes?.wisdom} attributeShort="WIS" attributeName="Wisdom" />
                        <CharacterAttribute data={data?.attributes?.perception} attributeShort="PER" attributeName="Perception" />
                        <CharacterAttribute data={data?.attributes?.focus} attributeShort="FOC" attributeName="Focus" />
                        <CharacterAttribute data={data?.attributes?.willpower} attributeShort="WIL" attributeName="Willpower" />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default CharacterAttributes;
