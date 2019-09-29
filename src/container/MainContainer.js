import React, { Component } from "react";
import StockContainer from "./StockContainer";
import Charts from "./Charts";
import TestDrag from "./TestDrag";
import NewsContainer from "./NewsContainer";
import TableTest from "../components/TableTest";
import DynamicMinMaxLayout from "./GridTest";
import { Container } from "semantic-ui-react";
let Draggable = window.ReactDraggable;
 const API_KEY = "V888PZNUNWFPPYH7";


const ApiCall =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=660c3463c12746e09799d80d01560e2e&category=business";
const URL = " http://localhost:3000/stocks";

class MainContainer extends Component {
  state = {
    stocks: [],
    selected_stock_id: null,
    news: {articles:[]},
    
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

  render() {
    return (
      <div>
        {/* <div className="row">
          <div className="col-sm-4">
            <TableTest
              stocks={this.state.stocks}
              handleChart={this.handleChart}
            />
          </div> */}
        {/* <div className="col-sm-8"> */}
        <div>
          <TestDrag
            selectedStockId={this.state.selected_stock_id}
            news={this.state.news.articles}
            stocks={this.state.stocks}
            handleChart={this.handleChart}
          />
        </div>
        <div className="col-sm-4">
          <NewsContainer news={this.state.news.articles} />
        </div>
        {/* <Container>
          <DynamicMinMaxLayout
            selectedStockId={this.state.selected_stock_id}
            handleChart={this.handleChart}
            news={this.state.news.articles}
            stocks={this.state.stocks}
          />
        </Container> */}
        <div>
          {/* <StockContainer
              stocks={this.state.stocks}
              handleChart={this.handleChart}
            /> */}
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default MainContainer;
