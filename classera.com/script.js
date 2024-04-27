const body = document.querySelector("body"),
sidebar = body.querySelector(".sidebar"),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");



modeSwitch.addEventListener("click" , () => {
    body.classList.toggle("dark");

        if (body.classList.contains("dark")){
        modeText.innerText = "Light Mode"
        } else {
        modeText.innerText = "Dark Mode"
        }
});


// sidebar buttons navigations
function showContent(contentId) {
  // Hide all content sections, including add-ticket-section
  var contents = document.querySelectorAll('.content-section');
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none';
  }
  addTicketSection.style.display = 'none'; // Added line

  // Show the selected content section
  document.getElementById(contentId).style.display = 'block';
}


// Get references to elements (outside functions for wider access)
const addTicketsButton = document.querySelector('.add_tickets_button');
const addTicketSection = document.querySelector('.add-ticket-section');
const ticketsElement = document.getElementById('tickets');
const dashboardButton = document.querySelector('.sidebar-item.dashboard a'); // Modify selector if needed
const ticketsButton = document.querySelector('.sidebar-item.tickets a'); // Modify selector if needed

// Initially hide the "add-ticket-section" (optional)
addTicketSection.style.display = 'none'; // Remove if initially visible

// Sidebar buttons navigation
function showContent(contentId) {
  // Hide all content sections, including add-ticket-section
  var contents = document.querySelectorAll('.content-section');
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none';
  }
  addTicketSection.style.display = 'none'; // Always hide this section

  // Show the selected content section
  document.getElementById(contentId).style.display = 'block';
}

// Add event listeners to sidebar buttons
dashboardButton.addEventListener('click', () => {
  showContent('dashboard-page');
});

ticketsButton.addEventListener('click', () => {
  showContent('tickets');
});

// Add event listener to the "add ticket" button
addTicketsButton.addEventListener('click', () => {
  // Toggle visibility
  addTicketSection.style.display = addTicketSection.style.display === 'none' ? 'block' : 'none';
  ticketsElement.style.display = addTicketSection.style.display === 'block' ? 'none' : 'block';

  // Navigate to the "add-ticket-section"
  addTicketSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});



// // Function to handle ticket button click
// function handleTicketButtonClick() {
//   // Hide the "tickets" content section
//   document.getElementById('tickets').style.display = 'none';

//   // Show the "add-ticket-section"
//   document.querySelector('.add-ticket-section').style.display = 'block';


// // Add click event listener to the ticket button
// var ticketButton = document.querySelector('.add_tickets_button');
// ticketButton.addEventListener('click', handleTicketButtonClick);

// }

// chart
//line chart
document.addEventListener('DOMContentLoaded', function() {
    // Define the data for each month
    var seriesData = {
        monthDataSeries1: {
            prices: [0, 200, 190, 450, 400, 500, 300], // Data points for each month
            dates: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01', '2022-06-01', '2022-07-01'] // Dates for each data point
        }
    };

    // Chart options with the provided data
    var options = {
        series: [{
            name: "STOCK ABC",
            data: seriesData.monthDataSeries1.prices
        }],
        chart: {
            type: 'area',
            height: 250,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth' // Change 'straight' to 'smooth' for a more wavy line
        },
     
        labels: seriesData.monthDataSeries1.dates,
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            opposite: false,
            min: 0,
            max: 600,
            tickAmount: 6, // Adjust the number of ticks
            tickValues: [0, 100, 200, 300, 400, 500, 600], // Specify the desired tick values
            labels: {
                formatter: function(val) {
                    return val.toFixed(0); // Format the labels to remove decimals
                }
            }
        },
        legend: {
            horizontalAlign: 'left'
        }
    };

    // Initialize the chart
    var chart = new ApexCharts(document.querySelector("#line-chart"), options);
    chart.render();
});

        // pie chart
        
        var options = {
            series: [55, 35, 23, 40],
            chart: {
              type: 'donut'
              
            },
            legend: {
              show: false // Hide the legend
            },
            dataLabels: {
              enabled: false // Hide data labels (numbers)
            },
            colors: ['#37c3ee', '#f9a60a', '#f93a4c', '#2683fe'], // Array of desired colors
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 150
                },
                legend: { // Legend options for smaller screens (can be omitted)
                  position: 'bottom'
                }
              }
            }]
          };
          
          var pieChart = new ApexCharts(document.querySelector("#pie-chart"), options);
          pieChart.render();

        //   progress bar
        
;(function($) {
    'use strict'

    // Animated Prograssbar
    $("[progress-bar]").each(function () {
    $(this)
        .find(".progress-fill")
        .animate(
        {
            width: $(this).attr("data-percentage"),
        },
        2000
        );

    $(this)
        .find(".progress-number-mark")
        .animate(
        { left: $(this).attr("data-percentage") },
        {
            duration: 2000,
            step: function (now, fx) {
            var data = Math.round(now);
            $(this)
                .find(".percent")
                .html(data + "%");
            },
        }
        );
    });
})(jQuery)


// responsive and resolution time
var options = {
    series: [{
    name: 'Within One Day',
    data: [83,44]
  }, {
    name: 'Within Two Days',
    data: [7,39],
    color: '#56d2e8'

  }, {
    name: 'Within Four Days',
    data: [5,11]
  }, {
    name: 'More Than Four Days',
    data: [4,6]
  }],
    chart: {
    type: 'bar',
    height: 180,
    stacked: true,
    stackType: '100%'
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  
  xaxis: {
    categories: ["Response Time" , "Resolution Time"],
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "Hours"
      }
    }
  },
  fill: {
    opacity: 1
  
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 40,
    fontSize: '9px'
  }
  };

  var stackedChart = new ApexCharts(document.querySelector("#Stacked-chart"), options);
  stackedChart.render();


  //tickects section 

// Get all nav items
const navItems = document.querySelectorAll('.nav-item');
// Get all content sections
const contentSections = document.querySelectorAll('.content');

// Function to handle item selection
function handleSelection(event) {
    // Remove 'selected' class from all nav items
    navItems.forEach(item => {
        item.classList.remove('selected');
    });

    // Add 'selected' class to the clicked item
    event.target.classList.add('selected');

    // Hide all content sections
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the corresponding content section based on data attribute
    const contentId = event.target.dataset.content + '-content';
    document.getElementById(contentId).style.display = 'block';
}

// Add click event listener to each nav item
navItems.forEach(item => {
    item.addEventListener('click', handleSelection);
}); 




