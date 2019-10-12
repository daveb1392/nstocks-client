import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import Chart from "./Charts"
import TableTest from "../components/TableTest";
import Bloomberg from "../components/Bloomberg"
import NewChart from "./NewChart";
import NewsContainer from "./NewsContainer";
import News from "../components/News";
import {Container} from "semantic-ui-react"
import HighStock from "./NewChart";


class ComponentDrag extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -200, y: 200
    }
  };

  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };

  onStart = () => {
    this.setState({activeDrags: ++this.state.activeDrags});
  };

  onStop = () => {
    this.setState({activeDrags: --this.state.activeDrags});
  };

  // For controlled component
  adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  };

  adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  };

  onControlledDrag = (e, position) => {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;
    return (
      <>
        <Draggable bounds="parent" handle="strong" {...dragHandlers}>
          <div className="box no-cursor">
            <strong className="cursor">
              <div>Stocks</div>
            </strong>
            <TableTest
              stocks={this.props.stocks}
              handleChart={this.props.handleChart}
            />
          </div>
        </Draggable>
        <Draggable handle="strong" {...dragHandlers}>
          <div className="box no-cursor">
            <strong className="cursor">
              <div>Intraday Chart</div>
            </strong>
            <Chart selectedStockId={this.props.selectedStockId} />
          </div>
        </Draggable>
        <Draggable handle="strong" {...dragHandlers}>
          <div className="box no-cursor">
            <strong className="cursor">
              <div>Bloomberg Live</div>
            </strong>
            <Bloomberg />
          </div>
        </Draggable>
        <Draggable handle="strong" {...dragHandlers}>
          <div className="box">
            <strong className="cursor">
              <div>Daily Chart</div>
            </strong>
            <div className="chart">
              <HighStock selectedStockId={this.props.selectedStockId} />
            </div>
          </div>
        </Draggable>
      </>
    );
}
}

export default ComponentDrag;