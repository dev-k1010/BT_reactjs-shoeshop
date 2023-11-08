import React, { Component } from "react";
import { connect } from "react-redux";
import { shoeArr } from "./data";

class CartShoe extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quatity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {this.props.cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>
                  <img
                    style={{
                      width: 50,
                    }}
                    src={item.image}
                    alt=""
                  />
                </td>
                <td>
                  <button
                    onClick={() => {
                      this.props.handleCartQuantity(item.id, 1);
                    }}
                    className="btn btn-danger"
                  >
                    +
                  </button>

                  <span className="mx-3">{item.carQuatity}</span>

                  <button
                    onClick={() => {
                      this.props.handleCartQuantity(item.id, -1);
                    }}
                    className="btn btn-warning"
                  >
                    -
                  </button>
                </td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => {
                      this.props.handleRemove(item.id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <thead>
          <th>
            Payment:{" "}
            {this.props.cart.reduce((total, item) => {
              return (total = total + item.price * item.carQuatity);
            }, 0)}
            {"$"}
          </th>
        </thead>
      </table>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    cart: state.shoeReducer.cart,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleCartQuantity: (index, tangGiam) => {
      let action = {
        type: "QUANTITY",
        payload: { index, tangGiam },
      };
      dispatch(action);
    },
    handleRemove: (index) => {
      let action = {
        type: "DELETE_ITEM",
        payload: index,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartShoe);
