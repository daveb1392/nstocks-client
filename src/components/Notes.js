import React, { Component } from "react";
import ReactStickies from "react-stickies"; //ES6
import { Card, Container, Segment, Header, Divider } from "semantic-ui-react";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  onSave() {
    // Make sure to delete the editorState before saving to backend
    const notes = this.state.notes;
    notes.map(note => {
      delete note.editorState;
    });
    // Make service call to save notes
    // Code goes here...
  }
  onChange(notes) {
    this.setState({
      // Update the notes state
      notes
    });
  }

  render() {
    return (
        <Container>
        <Segment inverted className="segment">
          <Divider horizontal inverted>
            Tools
          </Divider>
        </Segment>
        <ReactStickies
          notes={this.state.notes}
          onChange={this.onChange}
        />
        </Container>
    
    );
  }
};

export default Notes