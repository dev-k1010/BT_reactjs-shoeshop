import React, { Component } from "react";
import ItemShoe from "./ItemShoe";
import { connect } from "react-redux";

class ListShoe extends Component {
  render() {
 
    return (
      <div className="row">
        {this.props.list.map((item, index) => {
          return <ItemShoe  key={index} data={item} />;
        })}
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    list: state.shoeReducer.shoeArr,
  };
};
export default connect(mapStateToProps)(ListShoe);
