import React, { Component } from "react";
import News from "../components/News";


const ApiCall= "https://newsapi.org/v2/top-headlines?country=us&apiKey=824367279b4c41d59cb038805085de31&category=business"

class NewsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
    };
  }

  componentDidUpdate(prevProps) {
    if(prevProps){
        this.fetchEconomicNews();
    }
  }

//   fetchEconomicNews = () => {
//     fetch(ApiCall)
//       .then(resp => resp.json())
//       .then(news => {
//         // let newsDeet = [];
//         // for (let key in news) {
//         //   newsDeet.push(key);
//         // }
//         this.setState({
//           news: news
//         });
//       });
//   };

renderNewsArticles = () => {
    if (this.state.news.articles) {
        this.state.news.articles.map(news => (
        <News news={news}/>
        ))}
}

  fetchEconomicNews = () => {
    fetch(ApiCall)
      .then(resp => resp.json())
      .then(news => {
        this.setState({
          news: news
        });
      });
  };
  render() {
    // debugger;
    return( 
    <div>
    {this.renderNewsArticles()}
    <News news={this.state.news.articles}/>
    </div>
    )
  }
}
export default NewsContainer