import React from "react";
import ApiContext from "../ApiContext";
import addNewCustomItem from "../services/add-custom-item";
import config from "../config";
import TokenService from "../services/token-service";

class SearchModalItem extends React.Component {
  static contextType = ApiContext;

  state = {
    formattedCategories: [],
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
    const itemSelection = {
      Quantity: 0,
      Name: this.props.name.toLowerCase(),
      Categories: this.props.categories,
    };
    addNewCustomItem.toPantry(`${config.API_ENDPOINT}/pantry`, itemSelection);
    this.setState({
      addedToPantry: true,
    });
  };

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

  render() {
    const formattedCategories = this.props.categories.join();
    return (
      <div className="modal-item">
        <div className="modal-item-wrapper">
          <div className="modal-item-left">
            <div className="modal-item-left-top">{this.props.name}</div>
            <div className="modal-item-left-bottom">
              Type: {formattedCategories}
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

export default SearchModalItem;
