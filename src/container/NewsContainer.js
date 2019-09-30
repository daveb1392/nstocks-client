import React, { Component } from "react";
import News from "../components/News";
import { Card, Container } from "semantic-ui-react";


const ApiCall= "`https://newsapi.org/v2/everything?q=${this.props.selectedStockId}&from=2019-09-15&sortBy=publishedAt&apiKey=660c3463c12746e09799d80d01560e2e"

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



  render() {
    // debugger;
    return (
      <div>
        {!this.props.selectedStockId ? (
          <Card.Group>
            {this.props.news.map(news => (
              <News news={news} />
            ))}
          </Card.Group>
        ) : ( 
          <Card.Group>
            {this.state.stockNews.data.map(news => (
            <News news={news} />
            ))}
          </Card.Group>
        )}
      </div>
    );
  }

}
export default NewsContainer