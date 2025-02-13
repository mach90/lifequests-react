import { useGuilds } from "./useGuilds";
import LoadingSpinner from "../../ui/LoadingSpinner";
import GuildLink from "./GuildLink";
import CardMenu from "../../ui/CardMenu";
import { FaHouseFlag } from "react-icons/fa6";

const guildsMenuContainerStyle = "col-span-3 row-span-full";
const guildsListStyle = "overflow-scroll flex flex-col gap-2 justify-start items-center flex-col w-full h-[85%] p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-main3 [&::-webkit-scrollbar-thumb]:bg-main4 [&::-webkit-scrollbar-thumb]:hover:bg-neutral0 [&::-webkit-scrollbar:horizontal]:hidden";
const guildsListCompanyNameStyle = "text-base uppercase font-black text-neutral0 w-full pt-4";
const guildsListCompanySpanStyle = "text-base uppercase font-bold text-neutral500";

function GuildsMenu() {
    const { isLoading, guilds, error } = useGuilds();

    if(isLoading) return <LoadingSpinner size="lg" />

    return (
        <div className={guildsMenuContainerStyle}>
            <CardMenu title="Guilds" sort="Guilds" filter="Guilds" icon={FaHouseFlag}>
                <div className={guildsListStyle}>
                    <h3 className={guildsListCompanyNameStyle}>Naturalists <span className={guildsListCompanySpanStyle}>Company</span></h3>
                    {guilds.filter(guild => guild.company.name === "Naturalists").map(guild => <GuildLink key={guild.id} guildId={guild.id} name={guild.name} emblem={guild.images[0]} />)}
                    <h3 className={guildsListCompanyNameStyle}>Crafters <span className={guildsListCompanySpanStyle}>Company</span></h3>
                    {guilds.filter(guild => guild.company.name === "Crafters").map(guild => <GuildLink key={guild.id} guildId={guild.id} name={guild.name} emblem={guild.images[0]} />)}
                    <h3 className={guildsListCompanyNameStyle}>Specialists <span className={guildsListCompanySpanStyle}>Company</span></h3>
                    {guilds.filter(guild => guild.company.name === "Specialists").map(guild => <GuildLink key={guild.id} guildId={guild.id} name={guild.name} emblem={guild.images[0]} />)}
                    <h3 className={guildsListCompanyNameStyle}>Champions <span className={guildsListCompanySpanStyle}>Company</span></h3>
                    {guilds.filter(guild => guild.company.name === "Champions").map(guild => <GuildLink key={guild.id} guildId={guild.id} name={guild.name} emblem={guild.images[0]} />)}
                    <h3 className={guildsListCompanyNameStyle}>Artists <span className={guildsListCompanySpanStyle}>Company</span></h3>
                    {guilds.filter(guild => guild.company.name === "Artists").map(guild => <GuildLink key={guild.id} guildId={guild.id} name={guild.name} emblem={guild.images[0]} />)}
                    <h3 className={guildsListCompanyNameStyle}>Synergists <span className={guildsListCompanySpanStyle}>Company</span></h3>
                    {guilds.filter(guild => guild.company.name === "Synergists").map(guild => <GuildLink key={guild.id} guildId={guild.id} name={guild.name} emblem={guild.images[0]} />)}
                </div>
            </CardMenu>
        </div>
    );
};

export default GuildsMenu;
