import React, { Component } from "react";
import StockContainer from "./StockContainer";
import Charts from "./Charts";
import NewsContainer from "./NewsContainer"

 const API_KEY = "V888PZNUNWFPPYH7";



const URL = " http://localhost:3000/stocks";

class MainContainer extends Component {
  state = {
    stocks: [],
    selected_stock_id: null
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

  handleChart = (stockId) => { 
    this.setState({
      selected_stock_id: stockId
    }) 
  };

  // removeStock = stock => {
  //   this.setState({
  //     portfolio: this.state.portfolio.filter(
  //       sellStock => sellStock.id !== stock.id
  //     )
  //   });
  // };

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
          <div className="col-sm-4">
            <StockContainer
              stocks={this.state.stocks}
              handleChart={this.handleChart}
            />
          </div>
          <div className="col-sm-8">
            <Charts
              selectedStockId={this.state.selected_stock_id}
              
            />
          </div>
          <div className="col-sm-4">
            <NewsContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
