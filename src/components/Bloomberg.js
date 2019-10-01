import React from "react";
import Iframe from "react-iframe";

class Bloomberg extends React.Component{


    render() {
        return (
          <Iframe
            url="http://www.youtube.com/embed/xDMP3i36naA"
            width="450px"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        );
    }




}

export default Bloomberg 