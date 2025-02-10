import Card from "../../ui/Card";
import LoadingSpinner from "../../ui/LoadingSpinner";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const guildTitleContainerStyle = "col-span-4 row-span-2";
const guildTitleHeaderStyle = "flex flex-row gap-2 items-center justify-center";
const guildEmblemStyle = "w-6 h-6";
const guildNameStyle = "uppercase font-bold text-2xl text-neutral0";

function GuildTitle({ guild, isLoading }) {
    return (
        <div className={guildTitleContainerStyle}>
            <Card title="Guild" legend={guild.company.name}>
                {isLoading && <LoadingSpinner size="xs" />}
                {!isLoading && <div className={guildTitleHeaderStyle}>
                    <img 
                        className={guildEmblemStyle} 
                        src={guild.images[0] ? `${serverUrl}/img/guilds/${guild.images[0]}` : `${serverUrl}/img/guilds/default-emblem.png`} 
                    />
                    <h1 className={guildNameStyle}>{guild.name}</h1>
                </div>}
            </Card>
        </div>
    );
};

export default GuildTitle;
