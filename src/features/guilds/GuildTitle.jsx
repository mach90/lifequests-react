import Card from "../../ui/Card";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const guildTitleContainerStyle = "col-span-4 row-span-2";
const guildTitleHeaderStyle = "flex flex-row gap-2 items-center justify-center";
const guildEmblemStyle = "w-6 h-6";
const guildNameStyle = "uppercase font-bold text-2xl text-neutral0";

function GuildTitle({ guild, isPending }) {
    return (
        <div className={guildTitleContainerStyle}>
            <Card title="Guild" legend={guild?.company?.name}>
                <div className={guildTitleHeaderStyle}>
                    {guild.images[0] && <img 
                        className={guildEmblemStyle} 
                        src={`${serverUrl}/img/guilds/emblems/${guild.images[0]}`} 
                    />}
                    <h1 className={guildNameStyle}>{guild.name}</h1>
                </div>
            </Card>
        </div>
    );
};

export default GuildTitle;
