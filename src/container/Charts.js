import React from "react";
import Plot from "react-plotly.js";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";



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
    
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.props.selectedStockId}&outputsize=compact&apikey=${API_KEY}`;
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
          layout={{ width: "100%", height: "100%", title: this.props.selectedStockId }}
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