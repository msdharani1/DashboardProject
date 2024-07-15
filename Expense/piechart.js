// Sample data for the charts
const vendarData = [30, 20, 15, 25, 10];
const contractorData = [40, 10, 20, 15, 15];
const totalData = [70, 30, 35, 40, 25];

const labels = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];

// Function to create a pie chart with percentages
function createPieChart(canvasId, data, labels, colors) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 12,
                        font: {
                            size: 10
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${percentage}%`;
                        }
                    }
                }
            }
        },
        // plugins: [{
        //     id: 'percentageInside',
        //     afterDraw: function(chart) {
        //         const width = chart.width;
        //         const height = chart.height;
        //         const ctx = chart.ctx;
        //         ctx.restore();
        //         const fontSize = (height / 800).toFixed(2);
        //         ctx.font = fontSize + "em sans-serif";
        //         ctx.textBaseline = "middle";

        //         const total = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);

        //         let i = 0;
        //         chart.data.datasets.forEach((dataset) => {
        //             const meta = chart.getDatasetMeta(i);
        //             meta.data.forEach((element, index) => {
        //                 const data = dataset.data[index];
        //                 const percentage = ((data / total) * 100).toFixed(1) + "%";
        //                 const position = element.tooltipPosition();
        //                 ctx.fillStyle = "white";
        //                 ctx.textAlign = "center";
        //                 ctx.fillText(percentage, position.x, position.y);
        //             });
        //             i++;
        //         });
        //         ctx.save();
        //     }
        // }]
    });
}

// Create the charts
const vendarChart = createPieChart('vendarChart', vendarData, labels, colors);
const contractorChart = createPieChart('contractorChart', contractorData, labels, colors);
const totalExpensesChart = createPieChart('totalExpensesChart', totalData, labels, colors);

// Function to update chart based on value changes
function updateChart(chart, newData) {
    chart.data.datasets[0].data = newData;
    chart.update();
}

// Example of updating a chart (you can call this function when your data changes)
// updateChart(vendarChart, [25, 30, 15, 20, 10]);