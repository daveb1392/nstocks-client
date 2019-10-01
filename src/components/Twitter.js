import React from "react";
import ReactDOM from "react-dom";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from "react-twitter-embed";


function Twitter() {
  return (
    <div className="App">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="zerohedge"
        options={{ height: 600 }}
      />
    </div>
  );
}


export default Twitter

