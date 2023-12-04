$(function() {


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    smartSpeed: 1200,
    // touchDrag: false,
    // mouseDrag: false,
    nav: false,
    autoplay: true,
    // направление
    rtl: false, 
    items: 1,
    center: true, 
    
});

$('.cross-red').on('click', function(){
  $(this).closest('.dash-box').addClass('d-none');
});

$('.btn-show').on('click', function(){
  $('.dash-box').toggleClass('d-none');
});

$('.sandwich').on('click', function(){
  $(this).toggleClass('active');
  $('.left-bar').toggleClass('active');
  $('body').toggleClass('body-active');
  $('.navbar-dashboard').toggleClass('active');
});

$('.sandwich-right').on('click', function(){
  $(this).toggleClass('active');
  $('body').toggleClass('body-active-right');
  window.dispatchEvent(new Event('resize'));

});

var start = moment("10/10/2023");
var end = moment("10/31/2023");

function cb(start, end) {
    $('#date').html(start.format('ddd, MMMM D') + ' - ' + end.format('ddd, MMMM D'));
}

$('#cal').daterangepicker({
    startDate: start,
    endDate: end,
}, cb);

cb(start, end);

$('.btn-right-menu').on('click', function(){
  $('.right-bar').toggleClass('active');
  $('.dash-page').toggleClass('inactive');
});


$('.tab-id').on('click', function(){
  $(this).removeClass('done').prevAll().addClass('done');
  $(this).nextAll('.tab-id').removeClass('done');
});

$('#dark-mode').on('change', function() {
  if ($(this).is(':checked')) {
    $('body').addClass('dark-mode');
    $(".table").addClass('table-dark');
    $('.light-widget').addClass('bg-dark');
    darkModeChart();
  }
  else {
    $('body').removeClass('dark-mode');
    $('.table').removeClass('table-dark');
    $('.light-widget').removeClass('bg-dark');
    lightModeChart();
  }
});

var chartData = [{"visitor": 24, "visit": "United States"}, {"visitor": 13, "visit": "Russia"}, {"visitor": 13, "visit": "Italy"}, {"visitor": 26, "visit": "Germany"}, {"visitor": 24, "visit": "Other"}]

var visitorData = [],
    visitData = [];

for (var i = 0; i < chartData.length; i++) {
    visitorData.push(chartData[i]['visitor'])
    visitData.push(chartData[i]['visit'])
}

var myChart = new Chart(document.getElementById('circlechart'), {
    type: 'doughnut',
    data: {
        labels: visitData,
        datasets: [{
            label: 'Visitor',
            data: visitorData,
            backgroundColor: [
                "#3993bb",
                "#65b5c2",
                "#2e7bad",
                "#23649e",
                "#63daed",
            ]
        }]
    },
    options: {
        responsive: true,
        legend: false,
        legendCallback: function(chart) {
            var legendHtml = [];
            legendHtml.push('<ul>');
            var item = chart.data.datasets[0];
            for (var i=0; i < item.data.length; i++) {
                legendHtml.push('<li onclick="updateDataset(event, ' + '\'' + item.data[i] + '\'' + '); ">');
                legendHtml.push('<span class="chart-legend" style="background-color:' + item.backgroundColor[i] +'"></span>');
                legendHtml.push('<span class="chart-legend-label-text">' +chart.data.labels[i]+' </span>');
                legendHtml.push('</li>');
            }
            legendHtml.push('</ul>');
            return legendHtml.join("");
        }
    }
});

$('#my-legend-con').html(myChart.generateLegend());

  updateDataset = function(e, datasetIndex) {
      var index = datasetIndex;
      var ci = e.view.myChart;
      var meta = ci.getDatasetMeta(index);
      // See controller.isDatasetVisible comment
      meta.hidden = meta.hidden === null? !ci.data.datasets[index].hidden : null;
      // We hid a dataset ... rerender the chart
      ci.update();
    };

var acquisition = document.getElementById('acquisition');

var acChart = new Chart(acquisition, {
    // The type of chart we want to create
    type: 'line',
    
    // The data for our dataset
    data: {
        labels: ["25", "50", "75", "100", "125", "150", "175", "200", "225", "250"],
        datasets: [
        {
          label: "Direct",
          backgroundColor: 'rgba(57, 147, 187, 1)',
          borderColor: 'rgb(57, 147, 187)',
          data: [38, 58, 50, 24, 15, 59, 21, 19, 13, 10],
          lineTension: 0.3,
          pointBackgroundColor: 'rgba(76, 132, 255,0)',
          pointHoverBackgroundColor: 'rgba(57, 147, 187, .5)',
          pointHoverRadius: 3,
          pointHitRadius: 30,
          pointBorderWidth: 2,
          pointStyle: 'rectRounded'
        },
          {
          label: "Referral",
          backgroundColor: 'rgba(134, 211, 206, 1)',
          borderColor: 'rgba(134, 211, 206, 1)',
          data: [33, 53, 45, 59, 10, 54, 16, 14, 8, 5],
          lineTension: 0.3,
          pointBackgroundColor: 'rgba(254, 196, 0,0)',
          pointHoverBackgroundColor:  'rgba(134, 211, 206, .5)',
          pointHoverRadius: 3,
          pointHitRadius: 30,
          pointBorderWidth: 2,
          pointStyle: 'rectRounded',

        }
      ]
    },
    
    // Configuration options go here
    options: {
      legend: {
          display: true
       },
      
      scales: {
        xAxes: [{
          gridLines: {
            display: true
          }
        }],
        yAxes: [{
          gridLines: {
             display: true
          },
          ticks: {
             beginAtZero: true,
          },
       }]
     },
     tooltips: {
    }
  }
});
// document.getElementById('customLegend').innerHTML = acChart.generateLegend();


// FILLED-CHART

var chartData = {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.6)',
                // 'rgba(54, 162, 235, 0.6)',
                // 'rgba(255, 206, 86, 0.6)',
                // 'rgba(75, 192, 192, 0.6)',
                // 'rgba(153, 102, 255, 0.6)',
                 'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
                // 'rgba(255,99,132,1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Amounts by Month'
        },
        legend: {
            display: true
        },
        scales: {
            yAxes: [{
              // Hide y-axis here
                display: true,
                ticks: {
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Amount',
                    fontSize: 16
                }
            }],
          xAxes: [{
            // Hide x-axis here
              display: true
            }
          ]
        }
    }
};

var ctx = document.getElementById("filledChart").getContext("2d");
ctx.canvas.width = 600;
ctx.canvas.height = 150;


var chart = new Chart(ctx, chartData);

 })


$('.btn-mail-out').on('click', function(){
  $('#nav-mail').addClass('show', 'active');
  $('#nav-mail-tab').addClass('active');
  $('#dashboard').removeClass('show', 'active');
  $('#nav-dashboard-tab').removeClass('active');
});