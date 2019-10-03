import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import {FlowerSpinner} from 'react-epic-spinners'

class TableTest extends Component {
  state = {
    columnDefs: [
      {
        headerName: "Ticker",
        field: "id",
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains", "notContains"],
          debounceMs: 0
          // suppressAndOrCondition: true
        }
      },
      {
        headerName: "Current Price",
        field: "price"
        // valueGetter: function(params){
        //  return Number.parseFloat(params.stocks.price).toFixed(2);
        
        // },
        // valueSetter: function(params){
        //   let current_price = params.newValue
        //   Number.parseFloat(current_price).toFixed(2);
        // }
      // }
    },
      {
        headerName: "Change",
        field: "change",
        valueParser: numberRound,
        cellClassRules: {
          "rag-green": "x > 0",
          "rag-red": "x < 0"
        }
      },
      {
        headerName: "Change %",
        field: "change_pc",
        valueParser: numberParser,
        cellClassRules: {
          "rag-green": "x > 0",
          "rag-red": "x < 0"
        }
      },
      {
        headerName: "Opening Price",
        valueParser: numberRound,
        field: "open"
      }
    ],
    rowSelection: "single",
    rowData: []
  };

  onSelectionChanged() {
    let selectedRows = this.gridApi.getSelectedRows();
    this.props.handleChart(selectedRows[0].id);
    console.log(selectedRows);
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  render() {
    // debugger;
    return (
      <div className="grid-wrapper style">
        <div
          className="ag-theme-balham-dark"
          style={{
            height: "500px",
            width: "600px"
          }}
        >
          {!this.props.stocks ? (
            <FlowerSpinner />
          ) : (
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.props.stocks}
              rowSelection={this.state.rowSelection}
              onSelectionChanged={this.onSelectionChanged.bind(this)}
              onFirstDataRendered={this.onFirstDataRendered.bind(this)}
              onGridReady={params => (this.gridApi = params.api)}
              floatingFilter={true}
              // defaultColDef={this.state.defaultColDef}
              // onCellClicked={this.props.handleChart(this.props.stocks.id)}
            ></AgGridReact>
          )}
        </div>
      </div>
    );
  }
}


 const numberParser = (params) => {
    return Number(params.newValue);
  }

  const numberRound = (params) => {
    return Number.parseFloat(params).toFixed(2);
  }




export default TableTest;
