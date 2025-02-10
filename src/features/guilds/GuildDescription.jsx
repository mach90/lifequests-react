import Card from "../../ui/Card";

const guildDescriptionContainerStyle = "col-span-3 row-span-3";
const guildDescriptionTextStyle = "text-main4";

function GuildDescription({ guild }) {
    return (
        <div className={guildDescriptionContainerStyle}>
            <Card title="Guild description">
                <p className={guildDescriptionTextStyle}>{guild ?guild.description : "No description"}</p>
            </Card>
        </div>
    );
};

export default GuildDescription;
