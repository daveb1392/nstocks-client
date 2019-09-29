import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import Chart from "./Charts"
import TableTest from "../components/TableTest";
import NewsContainer from "./NewsContainer";
import News from "../components/News";


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
      <div>
        <Draggable {...dragHandlers}>
          <div className="box">
              
            <Chart 
            selectedStockId={this.props.selectedStockId} />
           
            {/* <News news={this.props.news.articles} /> */}
          
          </div>
        </Draggable>
        <Draggable {...dragHandlers}>
          <div className="box">
            
            <TableTest
              stocks={this.props.stocks}
              handleChart={this.props.handleChart}
            />
           
            {/* <News news={this.props.news.articles} /> */}
          </div>
        </Draggable>
      </div>

      //     <Draggable bounds="body" {...dragHandlers}>
      //     <div className="box">
      //       <Chart selectedStockId={this.props.selectedStockId} />
      //       <TableTest
      //         stocks={this.props.stocks}
      //         handleChart={this.props.handleChart}
      //       />
      //       {/* <News news={this.props.news.articles} /> */}
      //     </div>
      //   </Draggable>
    );
}
}

export default ComponentDrag;