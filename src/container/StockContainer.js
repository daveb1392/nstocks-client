import React, { Component } from "react";
import Stocks from "../components/Stocks";
// import DatatablePage from "../components/TableTest";

class StockContainer extends Component {
  render() {
    // debugger;
    return (  
    
      <div>
        <h2>Stocks</h2>
        {this.props.stocks.map(stock => (
         <Stocks stock={stock} handleChart={this.props.handleChart} />
         
          // <Stocks stock={stock} stockAction={this.props.addStocks} />
        ))}
      </div>
    );
  }
}

export default StockContainer;
      // <div>
      //    <div className="row">
      //     <div className="col-sm-4">
      //       <TableTest
      //         stocks={this.state.stocks}
      //         handleChart={this.handleChart}
      //       />
      //     </div> 
      //   <div className="col-sm-8">
      //   <div>
      //     <TestDrag
      //       selectedStockId={this.state.selected_stock_id}
      //       news={this.state.news.articles}
      //       stocks={this.state.stocks}
      //       handleChart={this.handleChart}
      //     />
      //   </div>

      //     <NewsContainer news={this.state.news.articles} />

      //    <Container>
      //     <DynamicMinMaxLayout
      //       selectedStockId={this.state.selected_stock_id}
      //       handleChart={this.handleChart}
      //       news={this.state.news.articles}
      //       stocks={this.state.stocks}
      //     />
      //   </Container> 
      //    <div>
      //     <StockContainer
      //         stocks={this.state.stocks}
      //         handleChart={this.handleChart}
      //       /> 
      //   </div>
      //   </div> 
      // </div>
      // <div>
      //   <Grid container spacing={3}>
      //     <Grid item xs={12} sm={6}> 
      //       <TestDrag
      //         selectedStockId={this.state.selected_stock_id}
      //         news={this.state.news.articles}
      //         stocks={this.state.stocks}
      //         handleChart={this.handleChart}
      //       /> 
      //      </Grid> 
      //      <Grid item xs={12}> 
          
      //     </Grid>
      //   </Grid> 
      //  </div>