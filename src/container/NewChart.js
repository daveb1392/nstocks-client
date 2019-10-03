import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";



class HighStock extends React.Component {
  constructor() {
    super();

    this.fetchNewStock = this.fetchNewStock.bind(this);
    this.state = {
      stockChartData: []
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStockId !== prevProps.selectedStockId) {
      return this.fetchNewStock();
    }
    //  return this.fetchStock()
  }

  // I need to convert the date into milliseconds

  fetchNewStock() {
    // debugger

    let alpha = require("alphavantage")({ key: "RU8WOMPG1N11NB3L" });
    alpha.data.daily(this.props.selectedStockId).then(data => {
      let stock = alpha.util.polish(data);

      let stockChartData = [];
      for (let key in stock.data) {
        // debugger
        let thisChartData = [];

        const newDate = new Date(key).getTime();
        thisChartData.push(newDate);
        thisChartData.push(parseFloat(stock.data[key].open));
        // thisChartData.push(parseFloat(stock.data[key].high));
        // thisChartData.push(parseFloat(stock.data[key].low));
        // thisChartData.push(parseFloat(stock.data[key].close));
        stockChartData.push(thisChartData);
      }

      this.setState({
        
        stockChartData: stockChartData
      });
    });
  }
  render() {
    // debugger

     let groupingUnits = [
       [
         "day", // unit name
         [1] // allowed multiples
       ],
       ["month", [1, 2, 3, 4, 6]]
     ];




    const options = {
      rangeSelector: {
        selected: 1
      },

      title: {
        text: this.props.selectedStockId
      },

      xAxis: {
        type: "datetime"
      },
      // yAxis: [
      //   {
      //     labels: {
      //       align: "right",
      //       x: -3
      //     },
      //     title: {
      //       text: "OHLC"
      //     },
      //     height: "60%",
      //     lineWidth: 2,
      //     resize: {
      //       enabled: true
      //     }
      //   }
      // ],

      series: [
        {
          // type: "candlestick",
          data: this.state.stockChartData,
          dataGrouping: {
            units: groupingUnits
          }
        }
      ]
    };

    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={options}
        />
      </div>
    );
  }
}
export default HighStock;
