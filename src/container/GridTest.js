import React from "react";
import _ from "lodash";
// import RGL, { WidthProvider } from "react-grid-layout";
import Chart from "./Charts";
// import TableTest from "../components/TableTest";

// const ReactGridLayout = WidthProvider(RGL);

// /**
//  * This layout demonstrates how to use the `onResize` handler to enforce a min/max width and height.
//  *
//  * In this grid, all elements are allowed a max width of 2 if the height < 3,
//  * and a min width of 2 if the height >= 3.
//  */
// class DynamicMinMaxLayout extends React.PureComponent {
//   static defaultProps = {
//     isDraggable: true,
//     isResizable: true,
//     autoSize: true,
//     items: 5,
//     onLayoutChange: function() {},
//     cols: 12
//   };

//   generateDOM() {
//     // Generate items with properties from the layout, rather than pass the layout directly
//     const layout = this.generateLayout();
//     return _.map(layout, function(l) {
//       return (
//         <div key={l.i} data-grid={l}>
//           <span className="text">{l.i}</span>
//         </div>
//       );
//     });
//   }

//   generateLayout() {
//     const p = this.props;
//     return _.map(new Array(p.items), function(item, i) {
//       const w = _.random(1, 2);
//       const h = _.random(1, 3);
//       return {
//         x: (i * 2) % 12,
//         y: Math.floor(i / 6),
//         w: w,
//         h: h,
//         i: i.toString()
//       };
//     });
//   }



//   render() {
//     return (
//       <ReactGridLayout
//         // onLayoutChange={this.onLayoutChange}
//         // onResize={this.onResize}
//         // {...this.props}
//         breakpoints={{ xxl: 800, xl: 600, lg: 400 }}
//       >
//         <div key="1">
//           <Chart selectedStockId={this.props.selectedStockId} />
//         </div>
//         {this.generateDOM()}
//       </ReactGridLayout>
//     );
//   }
// }


// export default DynamicMinMaxLayout

import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

class DynamicMinMaxLayout extends React.Component {
  
generateLayout() {
    const p = this.props;
    return _.map(new Array(p.items), function(item, i) {
      const w = _.random(1, 2);
      const h = _.random(1, 3);
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6),
        w: w,
        h: h,
        i: i.toString()
      };
    });
  }




  
  
  render() {
    // {lg: layout1, md: layout2, ...}
    var layouts = this.generateLayout();
    return (
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        autoSize={true}
        // draggableHandle="drag here"
        measureBeforeMount
      >
        <div key="1">
          <Chart selectedStockId={this.props.selectedStockId} />
        </div>
        <div key="2">2</div>
        <div key="3">3</div>
      </ResponsiveGridLayout>
    );
  }
}

export default DynamicMinMaxLayout