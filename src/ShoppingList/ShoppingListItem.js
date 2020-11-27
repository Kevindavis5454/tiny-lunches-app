import React from "react";
import ApiContext from "../ApiContext";

class ShoppingListItem extends React.Component {
  static contextType = ApiContext;

  removeItem = () => {
    const itemSelection = {
      name: this.props.name,
      categories: this.props.categories,
    };
    console.log(itemSelection, "preremoval");
    this.context.handleRemoveFromShoppingList(itemSelection);
  };

  render() {
    return (
      <div className="modal-item">
        <div className="modal-item-wrapper">
          <div className="modal-item-left">
            <div className="modal-item-left-top">{this.props.name}</div>
            <div className="modal-item-left-bottom">
              Type: {this.props.categories}
            </div>
          </div>
          <div className="modal-item-right">
            <div className="modal-item-right-wrapper">
              <span>Quantity: {this.props.quantity}</span>
            </div>
            <div className="modal-item-right-wrapper">
              <button onClick={this.removeItem} className="btn itembtn">
                <span className="noselect">Remove</span>
                <div className="circle"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingListItem;
