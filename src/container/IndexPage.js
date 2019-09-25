import React, { Component } from "react";
import MainContainer from "./MainContainer";
import { TVChartContainer } from "../components/TVChartContainer/index";
import Charts from "./Charts";


class IndexPage extends Component {

  render() {
    // debugger
    return (
      <div>
        {this.props.user && !this.props.user.error ? (
          <>
            once logge in shows:
            <MainContainer />
            {/* <TVChartContainer /> */}
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
