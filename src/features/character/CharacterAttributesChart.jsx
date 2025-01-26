/* //////////////////////////////////////////////////
RECHARTS VERSION
////////////////////////////////////////////////// */
// import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";

// const characterAttributesChartCardStyle = "bg-card col-span-2 row-span-5 text-white flex flex-col justify-start items-center border-4 border-variant1 rounded-lg";
// const characterAttributesChartTitleStyle = "bg-variant1 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";

// function CharacterAttributesChart({data}) {
//     const chartData = [
//         { 'attribute': 'STR', 'value': data?.attributes?.strength }, 
//         { 'attribute': 'STA', 'value': data?.attributes?.stamina },
//         { 'attribute': 'DEX', 'value': data?.attributes?.dexterity },
//         { 'attribute': 'SPD', 'value': data?.attributes?.speed },
//         { 'attribute': 'VIT', 'value': data?.attributes?.vitality },
//         { 'attribute': 'AGI', 'value': data?.attributes?.agility },
//         { 'attribute': 'INT', 'value': data?.attributes?.intelligence },
//         { 'attribute': 'CHA', 'value': data?.attributes?.charisma },
//         { 'attribute': 'WIS', 'value': data?.attributes?.wisdom },
//         { 'attribute': 'PER', 'value': data?.attributes?.perception },
//         { 'attribute': 'FOC', 'value': data?.attributes?.focus },
//         { 'attribute': 'WIL', 'value': data?.attributes?.willpower },
//     ];

//     return (
//         <div className={characterAttributesChartCardStyle}>
//             <h2 className={characterAttributesChartTitleStyle}>Attributes Radar</h2>
//             <ResponsiveContainer width="100%" height="100%">
//                 <RadarChart outerRadius="80%" width="100%" height="100%" data={chartData}>
//                     <PolarGrid gridType="circle" stroke="black" strokeWidth={1} />
//                     <PolarAngleAxis dataKey="attribute" />
//                     <PolarRadiusAxis angle={30}  />
//                     <Radar dataKey="value" stroke="white" fill="white" fillOpacity={0.5} />
//                 </RadarChart>
//             </ResponsiveContainer>
//         </div>
//     );
// };

/* //////////////////////////////////////////////////
CHART.JS VERSION
////////////////////////////////////////////////// */
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
  
ChartJS.register(RadialLinearScale, ArcElement, Tooltip);

// const chartData2 = [
//     { 'attribute': 'STR', 'value': data?.attributes?.strength }, 
//     { 'attribute': 'STA', 'value': data?.attributes?.stamina },
//     { 'attribute': 'DEX', 'value': data?.attributes?.dexterity },
//     { 'attribute': 'SPD', 'value': data?.attributes?.speed },
//     { 'attribute': 'VIT', 'value': data?.attributes?.vitality },
//     { 'attribute': 'AGI', 'value': data?.attributes?.agility },
//     { 'attribute': 'INT', 'value': data?.attributes?.intelligence },
//     { 'attribute': 'CHA', 'value': data?.attributes?.charisma },
//     { 'attribute': 'WIS', 'value': data?.attributes?.wisdom },
//     { 'attribute': 'PER', 'value': data?.attributes?.perception },
//     { 'attribute': 'FOC', 'value': data?.attributes?.focus },
//     { 'attribute': 'WIL', 'value': data?.attributes?.willpower },
// ];

const characterAttributesChartCardStyle = "bg-card col-span-2 row-span-5 text-white flex flex-col justify-start items-center border-4 border-variant1 rounded-lg";
const characterAttributesChartTitleStyle = "bg-variant1 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";
const characterAttributesChartAreaStyle = "h-full w-full p-4 bg-variant1/25";

function CharacterAttributesChart({chartData}) {
    const data = {
        labels: ["STR", "STA", "DEX", "SPD", "VIT", "AGI", "INT", "CHA", "WIS", "PER", "FOC", "WIL"],
        datasets: [
            {
                label: "",
                data: [
                    chartData?.strength, 
                    chartData?.stamina,
                    chartData?.dexterity,
                    chartData?.speed,
                    chartData?.vitality,
                    chartData?.agility,
                    chartData?.intelligence,
                    chartData?.charisma,
                    chartData?.wisdom,
                    chartData?.perception,
                    chartData?.focus,
                    chartData?.willpower,
                ],
                backgroundColor: [
                    "#cb364d",
                    "#e96745",
                    "#e7f49d",
                    "#fade93",
                    "#9a0040",
                    "#f2a867",
                    "#5c529e",
                    "#d76fa9",
                    "#64b799",
                    "#448aba",
                    "#b1dda9",
                    "#9beae7",
                ],
                borderWidth: 1,
                borderColor: "black",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                grid: {
                    color: "black",
                },
                ticks: {
                    display: true,
                    backdropColor: 'black',
                    color: 'white',
                    z: 0,
                    font: {
                        weight: 'bold'
                    },
                },
                pointLabels: {
                    display: true,
                    centerPointLabels: true,
                    color: 'white'
                }
            }
        }
    };

    return (
        <div className={characterAttributesChartCardStyle}>
            <h2 className={characterAttributesChartTitleStyle}>Attributes Radar</h2>
            <div className={characterAttributesChartAreaStyle}>
                <PolarArea data={data} options={options} />
            </div>
        </div>
    );
};

/* //////////////////////////////////////////////////
EXPORT
////////////////////////////////////////////////// */
export default CharacterAttributesChart;
