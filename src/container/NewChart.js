import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import HighStock from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const mockData = [
  [1490880600000, 144.19, 144.5, 143.5, 143.93, 21207300], 
];

let groupingUnits = [
  [
    "week", // unit name
    [1] // allowed multiples
  ],
  ["month", [1, 2, 3, 4, 6]]
];

let mockOptions = {
  rangeSelector: {
    selected: 1
  },

  title: {
    text: "AAPL Historical"
  },

  yAxis: [
    {
      labels: {
        align: "right",
        x: -3
      },
      title: {
        text: "OHLC"
      },
      height: "60%",
      lineWidth: 2,
      resize: {
        enabled: true
      }
    },
    {
      labels: {
        align: "right",
        x: -3
      },
      title: {
        text: "Volume"
      },
      top: "65%",
      height: "35%",
      offset: 0,
      lineWidth: 2
    }
  ],

  tooltip: {
    split: true
  },

  series: [
    {
      type: "candlestick",
      name: "AAPL",
      data: [],
      dataGrouping: {
        units: groupingUnits
      }
    },
    {
      type: "column",
      name: "Volume",
      data: [],
      yAxis: 1,
      dataGrouping: {
        units: groupingUnits
      }
    }
  ]
};

const transformChartData = (options, array) => {
  const dataLength = array.length;

  for (var i = 0; i < dataLength; i += 1) {
    options.series[0].data.push([
      array[i][0], // the date
      array[i][1], // open
      array[i][2], // high
      array[i][3], // low
      array[i][4] // close
    ]);

    options.series[1].data.push([
      array[i][0], // the date
      array[i][5] // the volume
    ]);
  }
  return options;
};

function App() {
  const [data, setData] = useState({ options: {} });
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const fetchedData = mockData; // simulate xhr request
      const newOptions = transformChartData(mockOptions, fetchedData);
      setData({ options: newOptions });
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <HighchartsReact
          highcharts={HighStock}
          constructorType={"stockChart"}
          options={data.options}
        />
      )}
    </div>
  );
}

render(<App />, document.getElementById("root"));
