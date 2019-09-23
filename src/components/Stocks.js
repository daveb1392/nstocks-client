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
        {/* <div
          className="card"
          onClick={() => this.props.stockAction(this.props.stock)}
        >
          <div className="card-body">
            <h5 className="card-title">
              {this.props.stock["Global Quote"]["01. symbol"]}
            </h5>
            <p className="card-text">
              {this.props.stock["Global Quote"]["05. price"]}
            </p>
          </div> */}
          <div className="App">
            {/* <p className="Table-header"></p> */}
            <Table data={this.data} />
          </div>
        </div>
      // </div>
    );
  }
}
export default Stock;

// import React, { Component } from 'react';
// import {BootstrapTable, 
//        TableHeaderColumn} from 'react-bootstrap-table';
// import '../css/Table.css';
// import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
 
 
// class Table1 extends Component {
//   render() {
//     return (
//       <div>
//         <BootstrapTable data={this.props.data}>
//           <TableHeaderColumn isKey dataField='id'>
//             ID
//           </TableHeaderColumn>
//           <TableHeaderColumn dataField='name'>
//             Name
//           </TableHeaderColumn>
//           <TableHeaderColumn dataField='value'>
//             Value
//           </TableHeaderColumn>
//         </BootstrapTable>
//       </div>
//     );
//   }
// }
 
// export default Table1;