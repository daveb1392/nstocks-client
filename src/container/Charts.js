import React from "react";
import Plot from "react-plotly.js";



let StockSymbol = "FB";
class Chart extends React.Component {

// on click wanted to render charts on the other side, the chart being renderd will match the id


    state = {
      stockChartXValues: [],
      stockChartYValues: []
    };
  

  componentDidUpdate(prevProps) {

    if(this.props.selectedStockId !== prevProps.selectedStockId){
    return this.fetchStock();
    }
  }

  

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = "V888PZNUNWFPPYH7";
    
    let API_Call = `https://www.alphavantage.co/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=${this.props.selectedStockId}&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        for (let key in data["Time Series (5min)"]) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(
            data["Time Series (5min)"][key]["1. open"]
          );
        }

        // console.log(stockChartXValuesFunction);
        pointerToThis.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartYValuesFunction
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Trend</h1>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" }
            }
          ]}
          layout={{ width: 750, height: 650, title: this.props.selectedStockId }}
        />
      </div>
    );
  }
}

export default Chart;
