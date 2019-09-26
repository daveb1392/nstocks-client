import React, { Component } from "react";
import StockContainer from "./StockContainer";
import Charts from "./Charts";
import NewsContainer from "./NewsContainer"

 const API_KEY = "V888PZNUNWFPPYH7";


const ApiCall =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=660c3463c12746e09799d80d01560e2e&category=business";
const URL = " http://localhost:3000/stocks";

class MainContainer extends Component {
  state = {
    stocks: [],
    selected_stock_id: null,
    news: {articles:[]}
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
      }).catch((err) => {
        // add some mock data to state
      });
  };

  fetchEconomicNews = () => {
    fetch(ApiCall)
      .then(resp => resp.json())
      .then(news => {
        this.setState({
          news: news
        });
      });
  };

  componentDidMount() {
    this.fetchStocks();
    this.fetchEconomicNews();
    // this.fetchEconomicNews();
  }
  // componentDidUpdate(prevProps) {
  //   if(prevProps){
  //        this.fetchEconomicNews();
  //    }
  //  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  handleChart = stockId => {
    this.setState({
      selected_stock_id: stockId
    });
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
            <Charts selectedStockId={this.state.selected_stock_id} />
          </div>
          <div className="col-sm-4">
            <NewsContainer news={this.state.news.articles}/>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
