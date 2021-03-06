compoundInterestCalculator();
compounding_form.oninput = function(event) {
  event.preventDefault();
  compoundInterestCalculator();
};

function compoundInterestCalculator() {

  //user inputs
  const form = document.forms.compounding_form.elements;
  let principal = Number(form.principal.value);
  let interest_rate = form.interest_rate.value;
  let compounding_frequency = form.compounding_frequency.value;
  let growth_period = form.growth_period.value;
  let deposit = form.deposit.value;
  let deposit_frequency = form.deposit_frequency.value;

  //outputs
  let your_contributions = form.your_contributions;
  let future_value = form.future_value;
  let interest_amount = form.interest_amount;
  let growth_percent = form.growth_percent;

  //calculations

  //Formmula | compound_interest = (principal * Math.pow((1 + (interest_rate / (compounding_frequency * 100))), (compounding_frequency * growth_period)));
  let compound_interest;
  let dataArray = []; //array to store data for Table chart [Year, Princial, Future Value]
  let dataArray2 = []; //array to store data for Column chart [Year, Future Value, Compound Interest, Principal, Deposits]
  let simple_interest;
  let dataArray3 = [
    ['Year', 'Simple Interest', 'Compound Interest']
  ]; //array to store data for Area chart [Year, Simple Interest, Future Value]

  //looping, so we can generate the data by the year and store in arrays for drawing charts
  let i;

  for (i = 1; i <= growth_period; i++) {
    compound_interest = (principal * Math.pow((1 + (interest_rate / (compounding_frequency * 100))), (compounding_frequency * i)));
    dataArray.push([i, principal, Number(compound_interest.toFixed(2))]);
    dataArray2.unshift([i, Number(compound_interest.toFixed(2)), Number((compound_interest - principal).toFixed(2)), principal, 200]);
    simple_interest = (principal * interest_rate * growth_period) / 100;
    dataArray3.push([i, simple_interest, compound_interest]);
  }

  dataArray2.unshift(['Year', 'Future Portfolio Value', 'Compound Interest', 'Principal', 'Deposits', ]);

  //outputting calculations
  your_contributions.value = "$ " + principal;
  future_value.value = "$ " + compound_interest.toFixed(2);
  interest_amount.value = "$ " + (compound_interest - principal).toFixed(2);
  growth_percent.value = (((compound_interest - principal) / principal) * 100).toFixed(2) + " %";

  //drawing charts
  tableChart(dataArray);
  pieChart(principal, Number(compound_interest.toFixed(2)));
  columnChart(dataArray2);
  areaChart(dataArray3);
}

//Pie Chart on Principal and Compound Interest Contribution in your wealth
function pieChart(principal, compound_interest) {

  // Load the Visualization API and the corechart package.
  google.charts.load('current', {
    'packages': ['corechart']
  });

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Key');
    data.addColumn('number', 'Value');
    data.addRows([
      ['Principal', principal],
      ['Compound Interest', compound_interest - principal],

    ]);

    // Set chart options
    var options = {
      'title': '',
      'width': 860,
      'height': 600
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
}

//Area Chart to Compound Interest vs Simple Interest
function areaChart(dataArray3) {
  google.charts.load('current', {
    'packages': ['corechart']
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable(dataArray3);

    var options = {
      title: '',
      hAxis: {
        title: 'Year',
        titleTextStyle: {
          color: '#333'
        }
      },
      vAxis: {
        minValue: 0
      }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('compound_vs_simple_div'));
    chart.draw(data, options);
  }
}

//Column Chart to show [Future Value, Compound Interest, Princial and Deposits] overs time (per year)
function columnChart(dataArray2) {
  google.charts.load('current', {
    'packages': ['bar']
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    console.log(dataArray2);
    var data = google.visualization.arrayToDataTable(dataArray2);

    var options = {
      chart: {
        title: '',
        subtitle: '',
      },
      bars: 'vertical' // Required for Material Bar Charts.
    };

    var chart = new google.charts.Bar(document.getElementById('barchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
  }
}

//Table Chart to provide Future Value of the Portfolio by the year
function tableChart(dataArray) {
  google.charts.load('current', {
    'packages': ['table']
  });
  google.charts.setOnLoadCallback(drawTable);

  function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Year');
    data.addColumn('number', 'Principal');
    data.addColumn('number', 'Future Value');
    data.addRows(dataArray);

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {
      showRowNumber: true,
      width: '100%',
      height: '100%'
    });
  }
}