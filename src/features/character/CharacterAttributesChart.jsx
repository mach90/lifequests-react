import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";

const characterAttributesChartCardStyle = "bg-card col-span-3 row-span-6 text-white flex justify-center items-center";

function CharacterAttributesChart({data}) {
    const chartData = [
        { 'attribute': 'STR', 'value': data?.attributes?.strength }, 
        { 'attribute': 'STA', 'value': data?.attributes?.stamina },
        { 'attribute': 'DEX', 'value': data?.attributes?.dexterity },
        { 'attribute': 'SPD', 'value': data?.attributes?.speed },
        { 'attribute': 'VIT', 'value': data?.attributes?.vitality },
        { 'attribute': 'AGI', 'value': data?.attributes?.agility },
        { 'attribute': 'INT', 'value': data?.attributes?.intelligence },
        { 'attribute': 'CHA', 'value': data?.attributes?.charisma },
        { 'attribute': 'WIS', 'value': data?.attributes?.wisdom },
        { 'attribute': 'PER', 'value': data?.attributes?.perception },
        { 'attribute': 'FOC', 'value': data?.attributes?.focus },
        { 'attribute': 'WIL', 'value': data?.attributes?.willpower },
    ];

    return (
        <div className={characterAttributesChartCardStyle}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius="80%" width="100%" height="100%" data={chartData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="attribute" />
                    <PolarRadiusAxis angle={30}  />
                    <Radar dataKey="value" stroke="white" fill="white" fillOpacity={0.5} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CharacterAttributesChart;
