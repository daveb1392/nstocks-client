// import React, { Component } from "react";
// import Highcharts from "highcharts/highstock";
// import {
//   HighchartsStockChart,
//   Chart,
//   withHighcharts,
//   XAxis,
//   YAxis,
//   Title,
//   Legend,
//   AreaSplineSeries,
//   SplineSeries,
//   Navigator,
//   RangeSelector,
//   Tooltip
// } from "react-jsx-highstock";

// class NewChart extends Component {
//   constructor(props) {
//     super(props);

//     const now = Date.now();
//     this.state = {
//       data1: [now, 1e7, 500],
//       data2: [now, 1e7, 500]
//     };
//   }

//   render() {
//     const { data1, data2 } = this.state;

//     return (
//       <div className="app">
//         <HighchartsStockChart>
//           <Chart zoomType="x" />

//           <Title>Highstocks Example</Title>

//           <Legend>
//             <Legend.Title>Key</Legend.Title>
//           </Legend>

//           <Tooltip />

//           <XAxis>
//             <XAxis.Title>Time</XAxis.Title>
//           </XAxis>

//           <YAxis>
//             <YAxis.Title>Price</YAxis.Title>
//             <AreaSplineSeries id="profit" name="Profit" data={data1} />
//           </YAxis>

//           <YAxis opposite>
//             <YAxis.Title>Social Buzz</YAxis.Title>
//             <SplineSeries id="twitter" name="Twitter mentions" data={data2} />
//           </YAxis>

//           <RangeSelector selected={1}>
//             <RangeSelector.Button count={1} type="day">
//               1d
//             </RangeSelector.Button>
//             <RangeSelector.Button count={7} type="day">
//               7d
//             </RangeSelector.Button>
//             <RangeSelector.Button count={1} type="month">
//               1m
//             </RangeSelector.Button>
//             <RangeSelector.Button type="all">All</RangeSelector.Button>
//             <RangeSelector.Input boxBorderColor="#7cb5ec" />
//           </RangeSelector>

//           <Navigator>
//             <Navigator.Series seriesId="profit" />
//             <Navigator.Series seriesId="twitter" />
//           </Navigator>
//         </HighchartsStockChart>
// {/*
//         <ExampleCode name="Highstocks">{code}</ExampleCode> */}
//       </div>
//     );
//   }
// }

// export default withHighcharts(NewChart, Highcharts);

import React, { Component } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

import axios from "axios";

class HighStockComponent extends Component {
  constructor() {
    super();

    this.fetchNewStock = this.fetchNewStock.bind(this);
    this.state = {
      stockChartData: []
    };
  }

  componentDidMount() {
    this.fetchNewStock();
    // this.fetchEconomicNews();
  }

  // I need to convert the date into milliseconds

  fetchNewStock() {
    // debugger

    let alpha = require("alphavantage")({ key: "RU8WOMPG1N11NB3L" });
    alpha.data.intraday("MSFT").then(data => {
      let stock = alpha.util.polish(data);

      let stockChartData = [];
      for (let key in stock.data) {
        // debugger
        let thisChartData = [];

        const newDate = new Date(key).getTime();
        thisChartData.push(newDate);
        thisChartData.push(parseFloat(stock.data[key].open));
        stockChartData.push(thisChartData);
      }

      this.setState({
        stockChartData: stockChartData
      });
    });
  }
  render() {
    const options = {
      xAxis: {
        type: "datetime",
        labels: {
          format: "{value:%HH:%MM}"
        }
      },
      series: [{ data: this.state.stockChartData }]
    };

    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}
export default HighStockComponent;
