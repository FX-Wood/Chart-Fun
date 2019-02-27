const ctx = document.getElementById('myChart').getContext('2d')

const categories = [];
const numbers = [];

data.forEach(item => {
    if (categories.indexOf(item.answer) === -1) {
        categories.push(item.answer);
        let index = categories/indexOf(item.answer);
        numbers[index] = 1;
    } else {
        let index = categories.indexOf(item.answer);
        numbers[index]++
    }
})


const myChart = new myChart(ctx, {
    type: 'bar',
    data: {
        labels: categories,
        datasets: [{
            label: '# of votes', data: numbers
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})