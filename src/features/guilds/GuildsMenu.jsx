import { useGuilds } from "./useGuilds";
import LoadingSpinner from "../../ui/LoadingSpinner";
import GuildLink from "./GuildLink";

const guildsMenuStyle = "bg-variant3/50 col-span-2 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant3";
const guildsListTitleStyle = "bg-variant3 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";
const guildsListStyle = "overflow-scroll flex flex-col gap-2 justify-start items-center flex-col w-full h-full p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-variant3 [&::-webkit-scrollbar-thumb]:hover:bg-variant3 [&::-webkit-scrollbar:horizontal]:hidden";

function GuildsMenu() {
    const { isLoading, guilds, error } = useGuilds();

    if(isLoading) return <LoadingSpinner size="lg" />

    return (
        <div className={guildsMenuStyle}>
            <h2 className={guildsListTitleStyle}>Guilds</h2>
            <div>Filter/Sort</div>
            <div className={guildsListStyle}>
                {guilds.map(guild => <GuildLink key={guild.id} guildId={guild.id} name={guild.name} emblem={guild.images[0]} />)}
            </div>
        </div>
    );
};

export default GuildsMenu;
