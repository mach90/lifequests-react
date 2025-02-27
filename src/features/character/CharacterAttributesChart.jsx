/* //////////////////////////////////////////////////
CHART.JS VERSION
////////////////////////////////////////////////// */
import Card from "../../ui/Card";
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip } from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { TbChartRadar } from "react-icons/tb";
  
ChartJS.register(RadialLinearScale, ArcElement, Tooltip);

const characterAttributesChartContainerStyle = "col-span-3 row-span-6";
const characterAttributesChartAreaStyle = "h-full w-full p-4";

function CharacterAttributesChart({chartData, isPending}) {
    const data = {
        labels: ["STR", "STA", "DEX", "SPD", "VIT", "AGI", "INT", "CHA", "WIS", "PER", "FOC", "WIL"],
        datasets: [
            {
                label: "",
                data: [
                    chartData?.attributes?.strength, 
                    chartData?.attributes?.stamina,
                    chartData?.attributes?.dexterity,
                    chartData?.attributes?.speed,
                    chartData?.attributes?.vitality,
                    chartData?.attributes?.agility,
                    chartData?.attributes?.intelligence,
                    chartData?.attributes?.charisma,
                    chartData?.attributes?.wisdom,
                    chartData?.attributes?.perception,
                    chartData?.attributes?.focus,
                    chartData?.attributes?.willpower,
                ],
                backgroundColor: [
                    // "#cb364d",
                    // "#e96745",
                    // "#e7f49d",
                    // "#fade93",
                    // "#9a0040",
                    // "#f2a867",
                    // "#5c529e",
                    // "#d76fa9",
                    // "#64b799",
                    // "#448aba",
                    // "#b1dda9",
                    // "#9beae7",
                    "#1d5f5955",
                    "#1d5f5955",
                    "#1d5f5955",
                    "#1d5f5955",
                    "#1d5f5955",
                    "#1d5f5955",
                    "#1d5f5955",
                    "#1d5f5955",
                    "#1d5f5955",
                    "#1d5f5955",
                    "#1d5f5955",
                    "#1d5f5955",
                ],
                borderWidth: 1,
                borderColor: "#35b9a8",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                grid: {
                    color: "#1E293C",
                },
                ticks: {
                    display: true,
                    backdropColor: "#1E293C",
                    color: "#91A2B6",
                    z: 0,
                    font: {
                        weight: "bold"
                    },
                },
                pointLabels: {
                    display: true,
                    centerPointLabels: true,
                    color: "#91A2B6"
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };

    return (
        <div className={characterAttributesChartContainerStyle}>
            <Card title="Attributes Radar" icon={TbChartRadar}>
                <div className={characterAttributesChartAreaStyle}>
                    <PolarArea data={data} options={options} />
                </div>
            </Card>
        </div>
    );
};

/* //////////////////////////////////////////////////
EXPORT
////////////////////////////////////////////////// */
export default CharacterAttributesChart;

/* //////////////////////////////////////////////////
RECHARTS VERSION
////////////////////////////////////////////////// */
// import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";

// const characterAttributesChartCardStyle = "bg-card col-span-2 row-span-5 text-white flex flex-col justify-start items-center border-4 border-variant1 rounded-lg";
// const characterAttributesChartTitleStyle = "bg-variant1 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";

// function CharacterAttributesChart({data}) {
//     const chartData = [
//         { "attribute": "STR", "value": data?.attributes?.strength }, 
//         { "attribute": "STA", "value": data?.attributes?.stamina },
//         { "attribute": "DEX", "value": data?.attributes?.dexterity },
//         { "attribute": "SPD", "value": data?.attributes?.speed },
//         { "attribute": "VIT", "value": data?.attributes?.vitality },
//         { "attribute": "AGI", "value": data?.attributes?.agility },
//         { "attribute": "INT", "value": data?.attributes?.intelligence },
//         { "attribute": "CHA", "value": data?.attributes?.charisma },
//         { "attribute": "WIS", "value": data?.attributes?.wisdom },
//         { "attribute": "PER", "value": data?.attributes?.perception },
//         { "attribute": "FOC", "value": data?.attributes?.focus },
//         { "attribute": "WIL", "value": data?.attributes?.willpower },
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