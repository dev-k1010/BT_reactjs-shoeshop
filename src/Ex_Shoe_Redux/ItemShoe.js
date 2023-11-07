import React, { Component } from "react";
import { connect } from "react-redux";

class ItemShoe extends Component {
  render() {
    let { data } = this.props;
    return (
      <div className="col-3 card">
        <img className="w-100" src={data.image} alt="" />
        <br />

        <button
          className="btn btn-primary"
          onClick={() => this.props.handelClickAdd(data)}
        >
          Add
        </button>
        <button
          onClick={() => {
            this.props.handelClickView(data);
          }}
          className="btn btn-info"
        >
          View
        </button>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handelClickView: (shoe) => {
      let action = {
        type: "VIEW_DETAIL",
        payload: shoe,
      };
      dispatch(action);
    },
    handelClickAdd: (shoe) => {
      let action = {
        type: "ADD_SHOE",
        payload: shoe,
      };
      dispatch(action);
      console.log(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(ItemShoe);
