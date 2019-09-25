import React, { Component } from "react";
import StockContainer from "./StockContainer";
import Charts from "./Charts";
 const API_KEY = "V888PZNUNWFPPYH7";



const URL = " http://localhost:3000/stocks";

class MainContainer extends Component {
  state = {
    stocks: [],
    // stockChartXValues: [],
    // stockChartYValues: []
  };

  fetchStocks = () => {
    fetch(URL)
      .then(resp => resp.json())
      .then(stocks => {
        this.setState({
          stocks: stocks
        });
      });
  };

  componentDidMount() {
    this.fetchStocks();
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  chartStocks = stock => {
    
    // if (!this.state.portfolio.includes(stock)) {
    //   this.setState({
    //     portfolio: [...this.state.portfolio, stock]
    //   });
    // }
//     let API_Call = `https://www.alphavantage.co/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=${stock.id}&apikey=${API_KEY}`;
//     let stockChartXValuesFunction = [];
//     let stockChartYValuesFunction = [];

//     fetch(API_Call)
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(data) {
//         console.log(data);
// debugger;
//         for (let key in data["Time Series (5min)"]) {
//           stockChartXValuesFunction.push(key);
//           stockChartYValuesFunction.push(
//             data["Time Series (5min)"][key]["1. open"]
//           );
//         }

//         // console.log(stockChartXValuesFunction);
//         this.setState({
//           stockChartXValues: stockChartXValuesFunction,
//           stockChartYValues: stockChartYValuesFunction
//         });
//       });
  };

  removeStock = stock => {
    this.setState({
      portfolio: this.state.portfolio.filter(
        sellStock => sellStock.id !== stock.id
      )
    });
  };

  render() {
    return (
      <div>
        {/* <SearchBar
          handleSort={this.handleSort}
          sortValue={this.state.sortValue}
          handleFilter={this.handleFilter}
          filterType={this.state.filterType}
          handleSearch={this.handleSearch}
          searchTerm={this.state.searchTerm}
        /> */}

        <div className="row">
          <div className="col-4">
            <StockContainer
              stocks={this.state.stocks}
              chartStocks={this.chartStocks}
            />
          </div>
          <div className="col-4">
            <Charts
              stockChartXValues={this.state.stockChartXValues}
              stockChartYValues={this.state.stockChartYValues}
              
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
