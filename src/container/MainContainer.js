import React, { Component } from "react";
import StockContainer from "./StockContainer";
import Charts from "./Charts";

const URL = " http://localhost:3000/stocks";

class MainContainer extends Component {
  state = {
    stocks: []
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
    this.fetchStocks()
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  addStocks = stock => {
    if (!this.state.portfolio.includes(stock)) {
      this.setState({
        portfolio: [...this.state.portfolio, stock]
      });
    }
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
          <div className="col-8">
            <StockContainer
              stocks={this.state.stocks}
              addStocks={this.addStocks}
            />
          </div>
          {/* <div className="col-4"> 
           <Charts stock= />

          </div>  */}
        </div>
      </div>
    );
  }
}

export default MainContainer;
