import React from "react";
import Iframe from "react-iframe";

class Bloomberg extends React.Component{


    render() {
        return (
          <Iframe
            url="//oklivetv.com/xplay/4e6a4930.html"
            width="450px"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        );
    }

//  <iframe style='width:100%;height:100%;background-color: #1A1A1A;' 
//  scrolling='no' 
//  frameborder='0' 
//  src='//oklivetv.com/xplay/4e6a4930.html' 
//  marginheight='0' 
//  marginwidth='0' 
//  allowtransparency='true' 
//  allowfullscreen='true' 
//  mozallowfullscreen='true' 
//  msallowfullscreen='true'
//   oallowfullscreen='true'
//    webkitallowfullscreen='true'>
//      <p>Sorry, your current browser does not support inline framing(iframes).</p></iframe>  


}

export default Bloomberg 