import React, { Component } from "react";
import StockContainer from "./StockContainer";
import Charts from "./Charts";
import TestDrag from "./TestDrag";
import NewsContainer from "./NewsContainer";
import Notes from "../components/Notes"
import FooterPage from "../components/Footer"
import TableTest from "../components/TableTest";
import DynamicMinMaxLayout from "./GridTest";
import { Container, Grid } from "semantic-ui-react";
import Twitter from "../components/Twitter";
// import Grid from "@material-ui/core/Grid";
// import { makeStyles } from "@material-ui/core/styles";
import { FlowerSpinner } from "react-epic-spinners";
// import { div } from "gl-matrix/src/gl-matrix/vec3";





let Draggable = window.ReactDraggable;
 const API_KEY = "V888PZNUNWFPPYH7";


const ApiCall =
  "https://stocknewsapi.com/api/v1/category?section=general&items=20&sortby=trending&token=fthuqovsibxdqmlovzc3v4v7zpqvos87sq5uyb0j"
const URL = " http://localhost:3000/stocks";

class MainContainer extends Component {
  state = {
    stocks: [],
    selected_stock_id: null,
    news: {data:[]},
    
    // stockChartXValues: [],
    // stockChartYValues: []
  };

  fetchStocks = () => {
    fetch(URL)
      .then(resp => resp.json())
      .then(stocks => {
        console.log(stocks);
        
        this.setState({
          stocks: stocks
        });
      }).catch((err) => {
       err.setInterval(this.fetchStocks, 60000)
      });
  };
  







  fetchEconomicNews = () => {
    fetch(ApiCall)
      .then(resp => resp.json())
      .then(news => {
        console.log(news);
        this.setState({
          news: news
        });
      });
  };

  componentDidMount() {
    this.fetchStocks();
    // setInterval(this.fetchStocks, 120000)
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
    // debugger
    return (
      // <Grid celled>

      //     <TestDrag
      //        selectedStockId={this.state.selected_stock_id}
      //        news={this.state.news.articles}
      //        stocks={this.state.stocks}
      //        handleChart={this.handleChart}
      //      />

      //   <Container>
      //     <NewsContainer news={this.state.news.articles} />
      //   </Container>
      // </Grid>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <TestDrag
              selectedStockId={this.state.selected_stock_id}
              news={this.state.news.data}
              stocks={this.state.stocks}
              handleChart={this.handleChart}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <NewsContainer
              news={this.state.news.data}
              selectedStockId={this.state.selected_stock_id}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Notes />
          </Grid.Column>
          <Grid.Column width={4}>
            <Twitter />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default MainContainer;
