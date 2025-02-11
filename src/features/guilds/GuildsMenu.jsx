import { useGuilds } from "./useGuilds";
import LoadingSpinner from "../../ui/LoadingSpinner";
import GuildLink from "./GuildLink";
import GuildsMenuOperations from "./GuildsMenuOperations";
import Pagination from "../../ui/Pagination";
import CardMenu from "../../ui/CardMenu";

const guildsMenuContainerStyle = "col-span-3 row-span-full";
const guildsListStyle = "overflow-scroll flex flex-col gap-2 justify-start items-center flex-col w-full p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-variant6 [&::-webkit-scrollbar-thumb]:hover:bg-variant6 [&::-webkit-scrollbar:horizontal]:hidden";
const guildsListCompanyNameStyle = "text-lg uppercase font-black text-slate-900 border-b border-slate-900 pt-4";

function GuildsMenu() {
    const { isLoading, guilds, error } = useGuilds();

    if(isLoading) return <LoadingSpinner size="lg" />

    return (
        <div className={guildsMenuContainerStyle}>
            <CardMenu title="Guilds" sort="Guilds" filter="Guilds">
                {/* <GuildsMenuOperations /> */}
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
            </CardMenu>
        </div>
    );
};

export default GuildsMenu;
