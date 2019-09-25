import React, { Component } from "react";
import Stocks from "../components/Stocks";

class StockContainer extends Component {
  render() {
    // debugger;
    return (  
    
      <div>
        <h2>Stocks</h2>
        {this.props.stocks.map(stock => (
         <Stocks stock={stock} handleChart={this.props.handleChart} />
         
          // <Stocks stock={stock} stockAction={this.props.addStocks} />
        ))}
      </div>
    );
  }
}

export default StockContainer;
