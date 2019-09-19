import React, { Component } from "react";


// const starsignsURL = "http://localhost:3000/starsigns"

class IndexPage extends Component {

  render() {
    // debugger
    return (
      <div>
        {this.props.user && !this.props.user.error ? (
          <>
            once logged in 
            
          </>
        ) : (
          <>
            previous to logging in. 
          </>
        )}
      </div>
    );
  }
}

export default IndexPage;
