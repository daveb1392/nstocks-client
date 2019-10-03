import React from "react";
import { Segment, Divider } from "semantic-ui-react";

const FooterPage = () => {
  return (
           <Segment inverted className="segment">
          <Divider horizontal inverted>
           &copy; {new Date().getFullYear()} {"Nstocks"}
          </Divider>
        </Segment>

  );
};

export default FooterPage;
