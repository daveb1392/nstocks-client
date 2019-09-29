import React from "react";
import {Item, Content, Header, Divider} from "semantic-ui-react";
import TimeAgo from "react-timeago";



class News extends React.Component {




render(){
// debugger
//   let publishedAt = new Date(this.props.news.publishedAt)

    


    return (
      <div class="ui relaxed divided list">
        <div class="item">
          <img class="ui avatar image" src={this.props.news.urlToImage}/>
          <div class="content">
            <a href={this.props.news.url} class="header">
              {this.props.news.title}
            </a>
            <div class="description">
              <TimeAgo date={this.props.news.publishedAt} />
            </div>
          </div>
        </div>
      </div>

      // <div className="card-group">
      //   <div className="card" onClick={()=> this.props.url}>
      //     <div className="card-body">
      //       <h5 className="card-title">n{this.props.news.title}</h5>
      //       <p className="card-text">{this.props.news.publishedAt}</p>
      //       <p className="card-text">{this.props.news.description}</p>
      //       {/* <p className="card-text">Link:{}</p> */}
      //     </div>
      //     {/* <div className="App">
      //       {/* <p className="Table-header"></p> */}
      //     {/* <Table data={this.data} /> */}
      //   </div>
      // </div>
    );
}


}
export default News;
