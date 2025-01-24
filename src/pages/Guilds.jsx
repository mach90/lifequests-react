import { useState } from "react";
import { getGuilds } from "../services/apiGuilds";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../ui/LoadingSpinner";
import GuildsList from "../features/guilds/GuildsList";
import GuildsTitle from "../features/guilds/GuildsTitle";
import GuildsMaster from "../features/guilds/GuildsMaster";
import GuildsChatbotInput from "../features/guilds/GuildsChatbotInput";
import GuildsDescription from "../features/guilds/GuildsDescription";
import GuildsProgress from "../features/guilds/GuildsProgress";
import GuildsQuests from "../features/guilds/GuildsQuests";

const guildsContainerStyle = "grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full";

function Guilds() {
    const [currentGuild, setCurrentGuild] = useState(null);
    const [company1, setCompany1] = useState(true);
    const [company2, setCompany2] = useState(true);
    const [company3, setCompany3] = useState(true);
    const [company4, setCompany4] = useState(true);
    const [company5, setCompany5] = useState(true);
    const [company6, setCompany6] = useState(true);

    const { isLoading, data: guilds, error } = useQuery({
        queryKey: ["guilds"],
        queryFn: getGuilds,
    });

    if(isLoading) return <LoadingSpinner size="lg" />

    // console.log("GETALLGUILDSQUERIED", guilds);

    return (
        <div className={guildsContainerStyle}>
            <GuildsList 
                data={guilds} 
                setCurrentGuild={setCurrentGuild} 
                company1={company1}
                company2={company2}
                company3={company3}
                company4={company4}
                company5={company5}
                company6={company6}
                setCompany1={setCompany1}
                setCompany2={setCompany2}
                setCompany3={setCompany3}
                setCompany4={setCompany4}
                setCompany5={setCompany5}
                setCompany6={setCompany6}
            />

            {currentGuild && <GuildsTitle currentGuild={currentGuild} />}

            {currentGuild && <GuildsMaster currentGuild={currentGuild} />}

            {currentGuild && <GuildsChatbotInput currentGuild={currentGuild} />}

            {currentGuild && <GuildsQuests currentGuild={currentGuild} />}

            {currentGuild && <GuildsDescription currentGuild={currentGuild} />}

            {currentGuild && <GuildsProgress currentGuild={currentGuild} />}

        </div>
    );
};

export default Guilds;