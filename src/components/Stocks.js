import React from "react";

class Stock extends React.Component{

state = {
  stock: []
  
  }



  render(){
    return(
  <div>
    <div className="card" onClick={() => this.props.stockAction(this.props.stock)}>
      <div className="card-body">
        <h5 className="card-title">
          {this.props.stock["Global Quote"]["01. symbol"]}
        </h5>
        <p className="card-text">{this.props.stock["Global Quote"]["05. price"]}</p>
      </div>
    </div>
  </div>
)  

  }
}
export default Stock;
