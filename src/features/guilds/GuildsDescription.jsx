const guildsDescriptionCardStyle = "bg-card col-span-3 row-span-6 text-white flex justify-center items-center";

function GuildsDescription({ currentGuild }) {
    return (
        <div className={guildsDescriptionCardStyle}>
            {currentGuild ?currentGuild.description : "No description"}
        </div>
    );
};

export default GuildsDescription;
