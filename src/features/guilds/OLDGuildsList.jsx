import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const guildsListContainerStyle = "bg-card col-span-2 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant3";
const guildsListTitleStyle = "bg-variant3 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";
const guildsListStyle = "bg-variant3/25 overflow-scroll flex flex-col gap-4 justify-start items-center flex-col w-full h-full p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-variant3 [&::-webkit-scrollbar-thumb]:hover:bg-variant3 [&::-webkit-scrollbar:horizontal]:hidden";
const guildsListSectionStyle = "w-full";
const guildsListSectionButtonStyle = "flex flex-row gap-2 items-center justify-between text-xl font-black text-white border-b-2 border-white mb-2 w-full";
const guildsListSectionItemsBoxStyle = "flex flex-col gap-2 w-full";
const guildsListItemStyle = "p-1 text-left font-semibold px-4 py-1 bg-linear-to-r from-slate-900 hover:from-variant3 to-transparent text-white w-full rounded-l-full";

function GuildsList({data, setCurrentGuild, company1, company2, company3, company4, company5, company6, setCompany1, setCompany2, setCompany3, setCompany4, setCompany5, setCompany6}) {
    return (
        <div className={guildsListContainerStyle}>
            <h2 className={guildsListTitleStyle}>Guilds</h2>
            <div className={guildsListStyle}>
                <div className={guildsListSectionStyle}>
                    <button className={guildsListSectionButtonStyle} onClick={() => setCompany1(!company1)}>
                        Naturalists {company1 ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
                    </button>
                    {company1 && <div className={guildsListSectionItemsBoxStyle}>
                        {data.filter(guild => guild.company?.name === "Naturalists").map(guild => <button key={guild._id} className={guildsListItemStyle} onClick={() => setCurrentGuild(guild)}>{guild.name}</button>)}
                    </div>}
                </div>
                <div className={guildsListSectionStyle}>
                    <button className={guildsListSectionButtonStyle} onClick={() => setCompany2(!company2)}>
                        Crafters {company2 ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
                    </button>
                    {company2 && <div className={guildsListSectionItemsBoxStyle}>
                        {data.filter(guild => guild.company?.name === "Crafters").map(guild => <button key={guild._id} className={guildsListItemStyle} onClick={() => setCurrentGuild(guild)}>{guild.name}</button>)}
                    </div>}
                </div>
                <div className={guildsListSectionStyle}>
                    <button className={guildsListSectionButtonStyle} onClick={() => setCompany3(!company3)}>
                        Champions {company3 ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
                    </button>
                    {company3 && <div className={guildsListSectionItemsBoxStyle}>
                        {data.filter(guild => guild.company?.name === "Champions").map(guild => <button key={guild._id} className={guildsListItemStyle} onClick={() => setCurrentGuild(guild)}>{guild.name}</button>)}
                    </div>}
                </div>
                <div className={guildsListSectionStyle}>
                    <button className={guildsListSectionButtonStyle} onClick={() => setCompany4(!company4)}>
                        Specialists {company4 ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
                    </button>
                    {company4 && <div className={guildsListSectionItemsBoxStyle}>
                        {data.filter(guild => guild.company?.name === "Specialists").map(guild => <button key={guild._id} className={guildsListItemStyle} onClick={() => setCurrentGuild(guild)}>{guild.name}</button>)}
                    </div>}
                </div>
                <div className={guildsListSectionStyle}>
                    <button className={guildsListSectionButtonStyle} onClick={() => setCompany5(!company5)}>
                        Artists {company5 ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
                    </button>
                    {company5 && <div className={guildsListSectionItemsBoxStyle}>
                        {data.filter(guild => guild.company?.name === "Artists").map(guild => <button key={guild._id} className={guildsListItemStyle} onClick={() => setCurrentGuild(guild)}>{guild.name}</button>)}
                    </div>}
                </div>
                <div className={guildsListSectionStyle}>
                    <button className={guildsListSectionButtonStyle} onClick={() => setCompany6(!company6)}>
                        Synergists {company6 ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
                    </button>
                    {company6 && <div className={guildsListSectionItemsBoxStyle}>
                        {data.filter(guild => guild.company?.name === "Synergists").map(guild => <button key={guild._id} className={guildsListItemStyle} onClick={() => setCurrentGuild(guild)}>{guild.name}</button>)}
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default GuildsList;
