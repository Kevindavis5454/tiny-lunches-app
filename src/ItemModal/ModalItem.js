import React from "react";
import ApiContext from "../ApiContext";
import addNewCustomItem from "../services/add-custom-item";
import config from "../config";
import TokenService from "../services/token-service";

class ModalItem extends React.Component {
  static contextType = ApiContext;

  addItem = () => {
    const itemSelection = {
      Name: this.props.name,
      Categories: this.props.categories,
    };
    this.context.handleAddToLunch(itemSelection);
  };

  addItemToPantry = () => {
    const selectionCategories = this.props.categories.split(",");
    const itemSelection = {
      Quantity: 0,
      Name: this.props.name.toLowerCase(),
      Categories: selectionCategories,
    };
    addNewCustomItem.toPantry(`${config.API_ENDPOINT}/pantry`, itemSelection);
  };

  renderPantryHasAuth() {
    return (
      <>
        <div className="modal-item-right-wrapper">
          <button onClick={this.addItemToPantry} className="btn itembtn">
            <span className="noselect">+Pantry</span>
            <div className="circle"></div>
          </button>
        </div>
      </>
    );
  }

  renderPantryNoAuth() {
    return null;
  }

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
              <button onClick={this.addItem} className="btn itembtn">
                <span className="noselect">+Lunch</span>
                <div className="circle"></div>
              </button>
            </div>
            {TokenService.hasAuthToken()
              ? this.renderPantryHasAuth()
              : this.renderPantryNoAuth()}
          </div>
        </div>
      </div>
    );
  }
}

export default ModalItem;
