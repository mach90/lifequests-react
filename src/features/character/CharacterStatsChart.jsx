import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const chartStyle = "col-span-4 row-span-full h-[95%] w-full bg-red-600/0";

function CharacterStatsChart({perDayStats, averageStats}) {
    /*
    PER DAY STATS
    {"json":[{"_id":"2025-02-20","numContractsForThatDate":1,"totalExperience":22000,"totalMoney":2200},{"_id":"2025-02-21","numContractsForThatDate":3,"totalExperience":90000,"totalMoney":8550},{"_id":"2025-02-23","numContractsForThatDate":1,"totalExperience":24000,"totalMoney":2300},{"_id":"2025-02-25","numContractsForThatDate":1,"totalExperience":11000,"totalMoney":750}]}
    */

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false,
                grid: {
                    display: false // Hide vertical grid lines
                }
            },
            y: {
                ticks: {
                    color: '#374154', // Y-axis label color
                    callback: function(value) {
                        // Only display integer values
                        return Number.isInteger(value) ? value : null; // Return null for non-integers
                    }
                },
                grid: {
                    color: '#1E293C', // Horizontal grid line color
                    lineWidth: 1,
                    borderDash: [1, 10] // Make grid lines dashed
                }
            }
        },
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart title',
            },
        },
    };
    
    const labels = perDayStats?.map(stat => stat._id) || [];

    const values = perDayStats?.map(stat => stat.numContractsForThatDate) || [];
    
    const data = {
        labels,
        datasets: [
          {
            fill: true,
            label: 'Completed contracts',
            data: values,
            borderColor: '#13B8A7',
            backgroundColor: '#115F5955',
          },
        ],
    };

    return (
        <div className={chartStyle}>
            <Line options={options} data={data} />
        </div>
    );
};

export default CharacterStatsChart;
