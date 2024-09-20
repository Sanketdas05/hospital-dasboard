var ctx =document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['In Stock', 'About to Expire', 'Expired' ],
        datasets: [{
            
            data: [100, 20, 11],
            backgroundColor: ["#5D53EA","#4AD4D4","#FC6123"],
            borderColor: ["#5D53EA","#4AD4D4","#FC6123"],
               
    }  ] }}); 