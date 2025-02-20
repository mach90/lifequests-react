import Card from "../../ui/Card";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const guildMasterContainerStyle = "col-span-4 row-span-6";
const guildMasterOutputContainerStyle = "relative w-full h-full";
const guildMasterBackgroundStyle = "absolute h-full w-full object-cover object-center z-0 rounded-2xl";
const guildMasterOutputStyle = "absolute top-2 right-2 bottom-2 left-[50%] bg-main3 p-4 rounded-xl overflow-x-none overflow-y-hidden text-main4";
const guildMasterAvatarStyle = "absolute bottom-0 left-0 h-[85%] z-10 rounded-bl-2xl";

function GuildsMaster({ guild }) {
    console.log(guild)
    return (
        <div className={guildMasterContainerStyle}>
            <Card title="Master">
                <div className={guildMasterOutputContainerStyle}>
                    <img 
                        className={guildMasterAvatarStyle} 
                        src={guild.images[1] ? `${serverUrl}/img/guilds/masters/${guild.images[1]}` : `${serverUrl}/img/guilds/masters/default-master.png`}
                    />
                    <img 
                        className={guildMasterBackgroundStyle} 
                        src={guild.imageCover ? `${serverUrl}/img/guilds/covers/${guild.imageCover}` : `${serverUrl}/img/guilds/covers/default-cover.jpg`} 
                    />
                    <p className={guildMasterOutputStyle}>
                        Cras faucibus eleifend odio quis sodales. Duis a libero sodales, tincidunt tellus facilisis, vestibulum dui. Morbi semper rutrum lobortis. Vivamus lacinia massa arcu, ullamcorper bibendum odio ultrices sit amet. Praesent quis lacus et lacus euismod varius. Vestibulum sit amet rhoncus eros, eget tincidunt ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vitae placerat nibh. Phasellus pellentesque dolor id odio auctor, ut rhoncus enim accumsan. Mauris ac bibendum enim. Nunc libero metus, pellentesque feugiat mi at, interdum egestas mi. Morbi commodo, lorem ac commodo vestibulum, risus odio ultricies mi, sit amet maximus ex massa id felis. Maecenas laoreet, sem vestibulum lacinia ultrices, sapien lacus pharetra nunc, id molestie dolor diam eu ante. Morbi urna sem, aliquam eu finibus id, sollicitudin sit amet est. Vestibulum volutpat placerat laoreet.
                    </p> 
                </div>
            </Card>
        </div>
    );
};

export default GuildsMaster;
