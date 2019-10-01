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
import { Card, Container, Segment, Header, Divider } from "semantic-ui-react";


function Twitter() {
  return (
    <div>
      <Segment inverted className="segment">
        <Divider horizontal inverted>
          Tweets
        </Divider>
      </Segment>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="zerohedge"
        options={{ height: 600 }}
      />
    </div>
  );
}


export default Twitter

