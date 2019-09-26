import React from "react";


class News extends React.Component {


render(){
    return (
      <div className="card-group">
        <div className="card" onClick={()=> this.props.url}>
          <div className="card-body">
            <h5 className="card-title">n{this.props.news.title}</h5>
            <p className="card-text">{this.props.news.publishedAt}</p>
            <p className="card-text">{this.props.news.description}</p>
            {/* <p className="card-text">Link:{}</p> */}
          </div>
          {/* <div className="App">
            {/* <p className="Table-header"></p> */}
          {/* <Table data={this.data} /> */}
        </div>
      </div>
    );
}


}
export default News