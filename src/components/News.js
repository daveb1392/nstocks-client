import React from "react";


class News extends React.Component {


render(){
    return (
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Headline:{this.props.news.title}</h5>
            <p className="card-text">Date:{this.props.news.publishedAt}</p>
            <p className="card-text">Description:{this.props.news.description}</p>
            <p className="card-text">Link:{this.props.news.url}</p>
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