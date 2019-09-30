// import React, { useState, useEffect } from "react";
// import { render } from "react-dom";
// import HighStock from "highcharts/highstock";
// import HighchartsReact from "highcharts-react-official";




// class NewChart extends React.Component{




// const mockData = [
//   [1490880600000, 144.19, 144.5, 143.5, 143.93, 21207300], 
// ];



// let groupingUnits = [
//   [
//     "week", // unit name
//     [1] // allowed multiples
//   ],
//   ["month", [1, 2, 3, 4, 6]]
// ];

// let mockOptions = {
//   rangeSelector: {
//     selected: 1
//   },

//   title: {
//     text: "AAPL Historical"
//   },

//   yAxis: [
//     {
//       labels: {
//         align: "right",
//         x: -3
//       },
//       title: {
//         text: "OHLC"
//       },
//       height: "60%",
//       lineWidth: 2,
//       resize: {
//         enabled: true
//       }
//     },
//     {
//       labels: {
//         align: "right",
//         x: -3
//       },
//       title: {
//         text: "Volume"
//       },
//       top: "65%",
//       height: "35%",
//       offset: 0,
//       lineWidth: 2
//     }
//   ],

//   tooltip: {
//     split: true
//   },

//   series: [
//     {
//       type: "candlestick",
//       name: "AAPL",
//       data: [],
//       dataGrouping: {
//         units: groupingUnits
//       }
//     },
//     {
//       type: "column",
//       name: "Volume",
//       data: [],
//       yAxis: 1,
//       dataGrouping: {
//         units: groupingUnits
//       }
//     }
//   ]
// };

// const transformChartData = (options, array) => {
//   const dataLength = array.length;

//   for (var i = 0; i < dataLength; i += 1) {
//     options.series[0].data.push([
//       array[i][0], // the date
//       array[i][1], // open
//       array[i][2], // high
//       array[i][3], // low
//       array[i][4] // close
//     ]);

//     options.series[1].data.push([
//       array[i][0], // the date
//       array[i][5] // the volume
//     ]);
//   }
//   return options;
// };

// function App() {
//   const [data, setData] = useState({ options: {} });
//   const [isLoading, setIsLoading] = useState(false);
//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       const fetchedData = mockData; // simulate xhr request
//       const newOptions = transformChartData(mockOptions, fetchedData);
//       setData({ options: newOptions });
//       setIsLoading(false);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       {isLoading ? (
//         <div>Loading ...</div>
//       ) : (
//         <HighchartsReact
//           highcharts={HighStock}
//           constructorType={"stockChart"}
//           options={data.options}
//         />
//       )}
//     </div>
//   );
// }
// }

// render(<App />, document.getElementById("root"));



import React, { Component } from "react";
import Highcharts from "highcharts/highstock";
import {
  HighchartsStockChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  Legend,
  AreaSplineSeries,
  SplineSeries,
  Navigator,
  RangeSelector,
  Tooltip
} from "react-jsx-highstock";


class NewChart extends Component {
  constructor(props) {
    super(props);

    const now = Date.now();
    this.state = {
      data1: [now, 1e7, 500],
      data2: [now, 1e7, 500]
    };
  }


  render() {
    const { data1, data2 } = this.state;

    return (
      <div className="app">
        <HighchartsStockChart>
          <Chart zoomType="x" />

          <Title>Highstocks Example</Title>

          <Legend>
            <Legend.Title>Key</Legend.Title>
          </Legend>

          <Tooltip />

          <XAxis>
            <XAxis.Title>Time</XAxis.Title>
          </XAxis>

          <YAxis>
            <YAxis.Title>Price</YAxis.Title>
            <AreaSplineSeries id="profit" name="Profit" data={data1} />
          </YAxis>

          <YAxis opposite>
            <YAxis.Title>Social Buzz</YAxis.Title>
            <SplineSeries id="twitter" name="Twitter mentions" data={data2} />
          </YAxis>

          <RangeSelector selected={1}>
            <RangeSelector.Button count={1} type="day">
              1d
            </RangeSelector.Button>
            <RangeSelector.Button count={7} type="day">
              7d
            </RangeSelector.Button>
            <RangeSelector.Button count={1} type="month">
              1m
            </RangeSelector.Button>
            <RangeSelector.Button type="all">All</RangeSelector.Button>
            <RangeSelector.Input boxBorderColor="#7cb5ec" />
          </RangeSelector>

          <Navigator>
            <Navigator.Series seriesId="profit" />
            <Navigator.Series seriesId="twitter" />
          </Navigator>
        </HighchartsStockChart>
{/* 
        <ExampleCode name="Highstocks">{code}</ExampleCode> */}
      </div>
    );
  }
}

export default withHighcharts(NewChart, Highcharts);


// import React, { Component } from "react";
// import Highcharts from "highcharts/highstock";
// import HighchartsReact from "highcharts-react-official";
// import axios from "axios";
// class HighStock extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: []
//     };
//   }

  



//   async componentDidMount() {
//     const API_KEY = "V888PZNUNWFPPYH7";
    
//   let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=FB&outputsize=compact&apikey=${API_KEY}`;
//     let res = await axios.get(API_Call);
//     let data = res.data;
//     // data = data.map(el => [el[0] * 1000, el[1]]);
//     this.setState({ data });
//   }
//   render() {
//     const options = {
//       title: {
//         text: "My Stock Chart"
//       },
//       series: [
//         {
//           name: "Stock Count",
//           data: this.state.data,
//           tooltip: {
//             valueDecimals: 2
//           }
//         }
//       ],
//       chart: {
//         type: "line"
//       }
//     };
//     return (
//       <div>
//         <HighchartsReact
//           highcharts={Highcharts}
//           constructorType={"stockChart"}
//           options={options}
//         />
//       </div>
//     );
//   }
// }
// export default HighStock;