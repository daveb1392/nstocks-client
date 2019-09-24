import React from "react";
import Table from "./Table";





class Stock extends React.Component {
  // do I need to have a state here because it will automatically update
  state = {
    stock: []
  };

  data = [
    {
      id: this.props.stock["Global Quote"]["01. symbol"],
      name: this.props.stock["Global Quote"]["05. price"],
      value: this.props.stock["Global Quote"]["09. change"]
    }
  ];

  render() {
    // debugger;
    return (
      <div>
        <div
          className="card"
          onClick={() => this.props.stockAction(this.props.stock)}
        >
          <div className="card-body">
            <h5 className="card-title">
              Symbol :{this.props.stock["Global Quote"]["01. symbol"]}
            </h5>
            <p className="card-text">
              Current price :{this.props.stock["Global Quote"]["05. price"]}
            </p>
            <p className="card-text">
              Change :{this.props.stock["Global Quote"]["09. change"]}
            </p>
          </div>
          {/* <div className="App">
            {/* <p className="Table-header"></p> */}
          {/* <Table data={this.data} /> */}
        </div>
      </div>
      // </div>
    );
  }
}
export default Stock;

