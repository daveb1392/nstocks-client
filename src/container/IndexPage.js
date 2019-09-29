import React, { Component } from "react";
import MainContainer from "./MainContainer";
import DragResize from "./DragResize"
import TableTest from "../components/TableTest"
import { TVChartContainer } from "../components/TVChartContainer/index";
import Charts from "./Charts";
import BasicLayout from "./GridTest";


class IndexPage extends Component {

  render() {
    // debugger
    return (
      <div>
        {this.props.user && !this.props.user.error ? (
          <>
            
            <MainContainer />
            {/* <DragResize /> */}
            {/* <TVChartContainer /> */}
            {/* <BasicLayout /> */}
            {/* <TableTest /> */}
            {/* <Table /> */}
           
            {/* <Charts/> */}
          </>
        ) : (
          <>
            previous to logging in.
            {/* <MainContainer /> */}
            {/* <TVChartContainer /> */}
          </>
        )}
      </div>
    );
  }
}

export default IndexPage;
