import React from "react";
import Plot from "react-plotly.js";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";



class Chart extends React.Component {
  // on click wanted to render charts on the other side, the chart being renderd will match the id

  state = {
    stockChartXValues: [],
    stockChartYValues: []
  };

  componentDidUpdate(prevProps) {
    if (this.props.selectedStockId !== prevProps.selectedStockId) {
      // setInterval(this.fetchNewStock, 60000);
      return this.fetchNewStock();
      
    }
    //  return this.fetchStock()
  }

  fetchNewStock() {
    const pointerToThis = this;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
    let alpha = require("alphavantage")({ key: "JX1IQ4YRJ08F9F68" });
    alpha.data
      .intraday(this.props.selectedStockId)
      .then(data => {
        let x = alpha.util.polish(data);
        console.log(x);
        for (let key in x.data) {
          // debugger
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(x.data[key].open);
        }
        pointerToThis.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartYValuesFunction
        });
      });
  }

  // componentDidMount() {

  //   this.fetchNewStock();;
  //   // this.fetchEconomicNews();
  // }

  // I need to convert the date into milliseconds

  // fetchNewStock() {
  //   // debugger
  //   const pointerToThis = this;
  //   let stockChartData = [];
  //   let alpha = require("alphavantage")({ key: "RU8WOMPG1N11NB3L" });
  //   alpha.data.intraday("MSFT").then(data => {
  //     let stock = alpha.util.polish(data);
  //     console.log(stock);
  //     for (let key in stock.data) {
  //       // debugger
  //
  //       stockChartData.push(new Date(key).getTime);
  //       stockChartData.push(parseInt(stock.data[key].open));
  //     }
  //     pointerToThis.setState({
  //       data1: stockChartData
  //     });
  //   });
  // }

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = "V888PZNUNWFPPYH7";
    const ApiKeyTwo = "RU8WOMPG1N11NB3L";

    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${this.props.selectedStockId}&interval=5min&outputsize=compact&apikey=${ApiKeyTwo}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        for (let key in data["Time Series (Daily)"]) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(
            data["Time Series (Daily)"][key]["1. open"]
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
          layout={{
            width: "700px",
            height: "100%",
            title: this.props.selectedStockId
          }}
        />
      </div>
    );
  }
}

export default Chart;






// class ChartDrag extends React.Component {
//   state = {
//     activeDrags: 0,
//     deltaPosition: {
//       x: 0, y: 0
//     },
//     controlledPosition: {
//       x: -400, y: 200
//     }
//   };

//   handleDrag = (e, ui) => {
//     const {x, y} = this.state.deltaPosition;
//     this.setState({
//       deltaPosition: {
//         x: x + ui.deltaX,
//         y: y + ui.deltaY,
//       }
//     });
//   };

//   onStart = () => {
//     this.setState({activeDrags: ++this.state.activeDrags});
//   };

//   onStop = () => {
//     this.setState({activeDrags: --this.state.activeDrags});
//   };

//   // For controlled component
//   adjustXPos = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     const {x, y} = this.state.controlledPosition;
//     this.setState({controlledPosition: {x: x - 10, y}});
//   };

//   adjustYPos = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     const {controlledPosition} = this.state;
//     const {x, y} = controlledPosition;
//     this.setState({controlledPosition: {x, y: y - 10}});
//   };

//   onControlledDrag = (e, position) => {
//     const {x, y} = position;
//     this.setState({controlledPosition: {x, y}});
//   };

//   onControlledDragStop = (e, position) => {
//     this.onControlledDrag(e, position);
//     this.onStop();
//   };

//   render() {
//     const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
//     const {deltaPosition, controlledPosition} = this.state;
//     return (
        
//         <Draggable bounds="body" {...dragHandlers}>
//           <div className="box">
//             <Chart/>
//           </div>
//         </Draggable>

//     )
// }

// export default ChartDrag;