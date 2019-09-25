import React from "react";


class News extends React.Component {


render(){
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Headline:{null}</h5>
            <p className="card-text">Date:{null}</p>
            <p className="card-text">Description:{null}</p>
            <p className="card-text">Link:{null}</p>
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