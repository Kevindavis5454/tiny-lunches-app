import React from "react";
import ApiContext from "../ApiContext";
import addNewCustomItem from "../services/add-custom-item";
import config from "../config";
import TokenService from "../services/token-service";

//Individual Non - Pantry items

class ModalItem extends React.Component {
  static contextType = ApiContext;

  state = {
    addedToPantry: false,
    addedToLunch: false,
  };

  addItem = () => {
    const itemSelection = {
      Name: this.props.name,
      Categories: this.props.categories,
    };
    this.context.handleAddToLunch(itemSelection);
    this.setState({
      addedToLunch: true,
    });
  };

  addItemToPantry = () => {
    const selectionCategories = this.props.categories.split(",");
    const itemSelection = {
      Quantity: 0,
      Name: this.props.name.toLowerCase(),
      Categories: selectionCategories,
    };
    addNewCustomItem.toPantry(`${config.API_ENDPOINT}/pantry`, itemSelection);
    this.setState({
      addedToPantry: true,
    });
  };

  renderPantryAdded() {
    return (
      <>
        <span className="noselect">Added!</span>
      </>
    );
  }

  renderPantryNotAdded() {
    return (
      <>
        <span className="noselect">+Pantry</span>
      </>
    );
  }

  renderLunchAdded() {
    return (
      <>
        <span className="noselect">Added!</span>
      </>
    );
  }

  renderLunchNotAdded() {
    return (
      <>
        <span className="noselect">+Lunch</span>
      </>
    );
  }

  renderPantryHasAuth() {
    return (
      <>
        <div className="modal-item-right-wrapper">
          <button onClick={this.addItemToPantry} className="btn itembtn">
            {!this.state.addedToPantry
              ? this.renderPantryNotAdded()
              : this.renderPantryAdded()}
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
                {!this.state.addedToLunch
                  ? this.renderLunchNotAdded()
                  : this.renderLunchAdded()}
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
