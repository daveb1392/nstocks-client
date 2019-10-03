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
    alpha.data.intraday(this.props.selectedStockId).then(data => {
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
      rangeSelector: {
        selected: 1
      },

      title: {
        text: this.props.selectedStockId
      },

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
