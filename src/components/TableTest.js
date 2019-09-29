import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class TableTest extends Component {
  state = {
    columnDefs: [
      {
        headerName: "Tickr",
        field: "id",
        resizable: true
      },
      {
        headerName: "Current Price",
        field: "price"
      },
      {
        headerName: "Change",
        field: "change"
      },
      {
        headerName: "Opening Price",
        field: "open"
      }
    ],
    rowSelection: "single",
    rowData: []
  };

  onSelectionChanged() {
    
    let selectedRows = this.gridApi.getSelectedRows();
   
  //  debugger;
    this.props.handleChart(selectedRows[0].id);
    // let selectedRowsString = "";
    // selectedRows.forEach(function(selectedRow, index) {
    //   if (index !== 0) {
    //     selectedRowsString += ", ";
    //   }
    //   selectedRowsString += selectedRow.id;
    // });
    // console.log(selectedRowsString)
    console.log(selectedRows)
    // document.querySelector("#selectedRows").innerHTML = selectedRowsString;
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }




  render() {
    return (
      <div className="grid-wrapper style">
        <div
          className="ag-theme-balham"
          style={{
            height: "500px",
            width: "600px"
          }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.props.stocks}
            rowSelection={this.state.rowSelection}
            onSelectionChanged={this.onSelectionChanged.bind(this)}
            onFirstDataRendered={this.onFirstDataRendered.bind(this)}
            onGridReady={params => (this.gridApi = params.api)}
            // onCellClicked={this.props.handleChart(this.props.stocks.id)}
          ></AgGridReact>
        </div>
      </div>
    );
  }
}

export default TableTest;
