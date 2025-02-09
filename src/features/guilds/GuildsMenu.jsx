import { useGuilds } from "./useGuilds";
import LoadingSpinner from "../../ui/LoadingSpinner";
import GuildLink from "./GuildLink";
import GuildsMenuOperations from "./GuildsMenuOperations";
import Pagination from "../../ui/Pagination";

const guildsMenuStyle = "bg-variant3/50 col-span-2 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant3";
const guildsListTitleStyle = "bg-variant3 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";
const guildsListStyle = "overflow-scroll flex flex-col gap-2 justify-start items-center flex-col w-full h-full p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-variant3 [&::-webkit-scrollbar-thumb]:hover:bg-variant3 [&::-webkit-scrollbar:horizontal]:hidden";
const guildsListCompanyNameStyle = "text-lg uppercase font-black text-slate-900 border-b border-slate-900 pt-4";

function GuildsMenu() {
    const { isLoading, guilds, error } = useGuilds();

    if(isLoading) return <LoadingSpinner size="lg" />

    return (
        <div className={guildsMenuStyle}>
            <h2 className={guildsListTitleStyle}>Guilds</h2>
            {/* <div>- sort (name asc-desc) or (company name asc-desc) or (guild progress asc-desc)
            - filter (company) and (have progress) or (don't have progress)</div> */}
            <GuildsMenuOperations />
            <div className={guildsListStyle}>
                <h3 className={guildsListCompanyNameStyle}>Naturalists</h3>
                {guilds.filter(guild => guild.company.name === "Naturalists").map(guild => <GuildLink key={guild.id} guildId={guild.id} name={guild.name} emblem={guild.images[0]} />)}
                <h3 className={guildsListCompanyNameStyle}>Crafters</h3>
                {guilds.filter(guild => guild.company.name === "Crafters").map(guild => <GuildLink key={guild.id} guildId={guild.id} name={guild.name} emblem={guild.images[0]} />)}
                <h3 className={guildsListCompanyNameStyle}>Specialists</h3>
                {guilds.filter(guild => guild.company.name === "Specialists").map(guild => <GuildLink key={guild.id} guildId={guild.id} name={guild.name} emblem={guild.images[0]} />)}
                <h3 className={guildsListCompanyNameStyle}>Champions</h3>
                {guilds.filter(guild => guild.company.name === "Champions").map(guild => <GuildLink key={guild.id} guildId={guild.id} name={guild.name} emblem={guild.images[0]} />)}
                <h3 className={guildsListCompanyNameStyle}>Artists</h3>
                {guilds.filter(guild => guild.company.name === "Artists").map(guild => <GuildLink key={guild.id} guildId={guild.id} name={guild.name} emblem={guild.images[0]} />)}
                <h3 className={guildsListCompanyNameStyle}>Synergists</h3>
                {guilds.filter(guild => guild.company.name === "Synergists").map(guild => <GuildLink key={guild.id} guildId={guild.id} name={guild.name} emblem={guild.images[0]} />)}
            </div>
            {/* <Pagination /> */}
        </div>
    );
};

export default GuildsMenu;
