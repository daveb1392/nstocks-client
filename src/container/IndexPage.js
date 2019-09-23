import React, { Component } from "react";
import MainContainer from "./MainContainer";



class IndexPage extends Component {

  render() {
    // debugger
    return (
      <div>
       
        {this.props.user && !this.props.user.error ? (
          <>
          once logge in shows:
            <MainContainer />
          </>
        ) : (
          <>previous to logging in.</>
        )}
      </div>
    );
  }
}

export default IndexPage;
