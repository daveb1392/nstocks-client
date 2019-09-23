import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
// import '../css/Table.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
 
 
class Table extends Component {

    
  render() {
    //   debugger;
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField="id">
            Tickr
          </TableHeaderColumn>
          {/* <TableHeaderColumn dataField="name">Name</TableHeaderColumn> */}
          <TableHeaderColumn dataField="name">Latest price</TableHeaderColumn>
          <TableHeaderColumn dataField="value">change</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
 
export default Table;