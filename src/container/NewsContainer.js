import React, { Component } from "react";
import News from "../components/News";
import { Card, Container } from "semantic-ui-react";


const ApiCall= "`https://newsapi.org/v2/everything?q=${this.props.selectedStockId}&from=2019-09-15&sortBy=trending&apiKey=660c3463c12746e09799d80d01560e2e"

class NewsContainer extends Component {
  state = {
    stockNews: { data: [] } 
  };


   componentDidUpdate(prevProps) {
    if(this.props.selectedStockId !== prevProps.selectedStockId){
    return this.fetchStockNews();;
  }}

  fetchStockNews = () => {
    
    let ApiCall = `https://stocknewsapi.com/api/v1?tickers=${this.props.selectedStockId}&items=20&sortby=algo&token=fthuqovsibxdqmlovzc3v4v7zpqvos87sq5uyb0j`;
    
    fetch(ApiCall)
      .then(resp => resp.json())
      .then(news => {
        console.log(news)
        this.setState({
          stockNews: news
        });
      });
  };



  //Write a function that counts all the items in the sentiment key 
  // 1. map through the array 
  // 2. filter through array 
  // 3. either create an object or do the below in a component and set the state. 
  // let sentiment = this.props.news.map(news => news.sentiment)
  // let neutral = sentiment.filter(news => news === "Neutral")
  // let neutral = sentiment.filter(news => news === "Positive")
  // let neutral = sentiment.filter(news => news === "Negative")




  render() {
    debugger;
    return (
      <Container>
        <h3>News</h3>
        {!this.props.selectedStockId ? (
          <Card.Group centered>
            {this.props.news.map(news => (
              <News news={news} />
            ))}
          </Card.Group>
        ) : (
          <Card.Group centered>
            {this.state.stockNews.data.map(news => (
              <News news={news} />
            ))}
          </Card.Group>
        )}
      </Container>
    );
  }

}
export default NewsContainer