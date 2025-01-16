import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const guildsListStyle = "bg-card col-span-3 row-span-full overflow-scroll p-4 flex flex-col gap-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-none [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-gray-400 [&::-webkit-scrollbar:horizontal]:hidden";
const guildsListSectionButtonStyle = "flex flex-row gap-2 items-center justify-between text-xl font-black text-white border-b-2 border-white mb-2 w-full";
const guildsListSectionItemsBoxStyle = "flex flex-col gap-2";
const guildsListItemStyle = "p-1 text-left font-semibold px-4 py-1 bg-gradient-to-r from-slate-900 hover:from-variant1 to-transparent text-white";

function GuildsList({data, setCurrentGuild, company1, company2, company3, company4, company5, company6, setCompany1, setCompany2, setCompany3, setCompany4, setCompany5, setCompany6}) {
    return (
        <div className={guildsListStyle}>
            <div>
                <button className={guildsListSectionButtonStyle} onClick={() => setCompany1(!company1)}>
                    Naturalists {company1 ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}
                </button>
                {company1 && <div className={guildsListSectionItemsBoxStyle}>
                    {data.filter(guild => guild.company?.name === "Naturalists").map(guild => <button key={guild._id} className={guildsListItemStyle} onClick={() => setCurrentGuild(guild)}>{guild.name}</button>)}
                </div>}
            </div>
            <div>
                <button className={guildsListSectionButtonStyle} onClick={() => setCompany2(!company2)}>
                    Crafters {company2 ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}
                </button>
                {company2 && <div className={guildsListSectionItemsBoxStyle}>
                    {data.filter(guild => guild.company?.name === "Crafters").map(guild => <button key={guild._id} className={guildsListItemStyle} onClick={() => setCurrentGuild(guild)}>{guild.name}</button>)}
                </div>}
            </div>
            <div>
                <button className={guildsListSectionButtonStyle} onClick={() => setCompany3(!company3)}>
                    Champions {company3 ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}
                </button>
                {company3 && <div className={guildsListSectionItemsBoxStyle}>
                    {data.filter(guild => guild.company?.name === "Champions").map(guild => <button key={guild._id} className={guildsListItemStyle} onClick={() => setCurrentGuild(guild)}>{guild.name}</button>)}
                </div>}
            </div>
            <div>
                <button className={guildsListSectionButtonStyle} onClick={() => setCompany4(!company4)}>
                    Specialists {company4 ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}
                </button>
                {company4 && <div className={guildsListSectionItemsBoxStyle}>
                    {data.filter(guild => guild.company?.name === "Specialists").map(guild => <button key={guild._id} className={guildsListItemStyle} onClick={() => setCurrentGuild(guild)}>{guild.name}</button>)}
                </div>}
            </div>
            <div>
                <button className={guildsListSectionButtonStyle} onClick={() => setCompany5(!company5)}>
                    Artists {company5 ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}
                </button>
                {company5 && <div className={guildsListSectionItemsBoxStyle}>
                    {data.filter(guild => guild.company?.name === "Artists").map(guild => <button key={guild._id} className={guildsListItemStyle} onClick={() => setCurrentGuild(guild)}>{guild.name}</button>)}
                </div>}
            </div>
            <div>
                <button className={guildsListSectionButtonStyle} onClick={() => setCompany6(!company6)}>
                    Synergists {company6 ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}
                </button>
                {company6 && <div className={guildsListSectionItemsBoxStyle}>
                    {data.filter(guild => guild.company?.name === "Synergists").map(guild => <button key={guild._id} className={guildsListItemStyle} onClick={() => setCurrentGuild(guild)}>{guild.name}</button>)}
                </div>}
            </div>
        </div>
    );
};

export default GuildsList;
