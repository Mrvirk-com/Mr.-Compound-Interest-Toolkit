compoundingCalculator();
compoundingChart();
calculationsTable();
compounding_vs_simple_interest_chart();
yearly_compound_growth_deposits_and_simple_intrest_corelation_chart();
compounding_form.oninput = function(event) {
  event.preventDefault();
  compoundingCalculator();
};


function compoundingCalculator() {
  //inputs
  const form = document.forms.compounding_form.elements;
  let principal = form.principal.value;
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
  let profit = form.profit;
  //calculations
  // The equation is A = p * [[1 + (r/n)] ^ nt]
  //compound_interest = (principal * Math.pow((1 + (interest_rate / (compounding_frequency * 100))), (compounding_frequency * growth_period)));
  your_contributions.value = principal;

  let compound_interest;
  let i;
  for (i = 1; i <= growth_period; i++) {
    compound_interest = (principal * Math.pow((1 + (interest_rate / (compounding_frequency * 100))), (compounding_frequency * growth_period)));
    console.log("Run = " + i);

  }


  future_value.value = compound_interest.toFixed(2);

}

function compoundingChart() {

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
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 2]
    ]);

    // Set chart options
    var options = {
      'title': 'How Much Pizza I Ate Last Night',
      'width': 400,
      'height': 300
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
}

function compounding_vs_simple_interest_chart() {
  google.charts.load('current', {
    'packages': ['corechart']
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2013', 1000, 400],
      ['2014', 1170, 460],
      ['2015', 660, 1120],
      ['2016', 1030, 540]
    ]);

    var options = {
      title: 'Company Performance',
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

function yearly_compound_growth_deposits_and_simple_intrest_corelation_chart() {
  google.charts.load('current', {
    'packages': ['bar']
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350]
    ]);

    var options = {
      chart: {
        title: 'Company Performance',
        subtitle: 'Sales, Expenses, and Profit: 2014-2017',
      },
      bars: 'horizontal' // Required for Material Bar Charts.
    };

    var chart = new google.charts.Bar(document.getElementById('barchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
  }
}


function calculationsTable() {
  google.charts.load('current', {
    'packages': ['table']
  });
  google.charts.setOnLoadCallback(drawTable);

  function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('number', 'Salary');
    data.addColumn('boolean', 'Full Time Employee');
    data.addRows([
      ['Mike', {
        v: 10000,
        f: '$10,000'
      }, true],
      ['Jim', {
        v: 8000,
        f: '$8,000'
      }, false],
      ['Alice', {
        v: 12500,
        f: '$12,500'
      }, true],
      ['Bob', {
        v: 7000,
        f: '$7,000'
      }, true]
    ]);

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {
      showRowNumber: true,
      width: '100%',
      height: '100%'
    });
  }
}