import React from "react";
import ApiContext from "../ApiContext";
import addNewCustomItem from "../services/add-custom-item";
import config from "../config";
import TokenService from "../services/token-service";

class AddItem extends React.Component {
  static contextType = ApiContext;

  addCustomItem = () => {
    const selectionCategories = [];
    const carb = document.getElementById("carbCheck").checked;
    const veg = document.getElementById("vegCheck").checked;
    const fruit = document.getElementById("fruitCheck").checked;
    const protein = document.getElementById("proteinCheck").checked;
    const drink = document.getElementById("drinkCheck").checked;
    const dessert = document.getElementById("dessertCheck").checked;
    const quantityNumber = document.getElementById("add-item-quantity-input")
      .value;
    if (carb) {
      selectionCategories.push("carb");
    }
    if (veg) {
      selectionCategories.push("vegetable");
    }
    if (fruit) {
      selectionCategories.push("fruit");
    }
    if (protein) {
      selectionCategories.push("protein");
    }
    if (drink) {
      selectionCategories.push("drink");
    }
    if (dessert) {
      selectionCategories.push("dessert");
    }
    if (selectionCategories.length >= 2) {
      selectionCategories.push("combo");
      const itemSelection = {
        Quantity: quantityNumber,
        Name: document.getElementById("add-input-name").value,
        Categories: selectionCategories.toString().toLowerCase(),
      };
      this.context.handleAddToLunch(itemSelection);
    } else {
      const itemSelection = {
        Quantity: quantityNumber,
        Name: document.getElementById("add-input-name").value,
        Categories: selectionCategories.toString().toLowerCase(),
      };
      this.context.handleAddToLunch(itemSelection);
    }
  };

  addCustomItemToPantry = () => {
    const selectionCategories = [];
    const carb = document.getElementById("carbCheck").checked;
    const veg = document.getElementById("vegCheck").checked;
    const fruit = document.getElementById("fruitCheck").checked;
    const protein = document.getElementById("proteinCheck").checked;
    const drink = document.getElementById("drinkCheck").checked;
    const dessert = document.getElementById("dessertCheck").checked;
    const quantityNumber = document.getElementById("add-item-quantity-input")
      .value;
    if (carb) {
      selectionCategories.push("carb");
    }
    if (veg) {
      selectionCategories.push("vegetable");
    }
    if (fruit) {
      selectionCategories.push("fruit");
    }
    if (protein) {
      selectionCategories.push("protein");
    }
    if (drink) {
      selectionCategories.push("drink");
    }
    if (dessert) {
      selectionCategories.push("dessert");
    }
    if (selectionCategories.length >= 2) {
      selectionCategories.push("combo");
      const itemSelection = {
        Quantity: quantityNumber,
        Name: document.getElementById("add-input-name").value.toLowerCase(),
        Categories: selectionCategories,
      };
      addNewCustomItem.toPantry(`${config.API_ENDPOINT}/pantry`, itemSelection);

      this.props.render();
    } else {
      const itemSelection = {
        Quantity: quantityNumber,
        Name: document.getElementById("add-input-name").value.toLowerCase(),
        Categories: selectionCategories,
      };
      addNewCustomItem.toPantry(`${config.API_ENDPOINT}/pantry`, itemSelection);

      this.props.render();
    }
  };
  // Button changes dependant on JWT Token
  renderAuthPantryButton() {
    return (
      <>
        <button onClick={this.addCustomItemToPantry} className="btn itembtn">
          <span className="noselect">+Pantry</span>
          <div className="circle"></div>
        </button>
      </>
    );
  }

  renderNoAuthPantryButton() {
    return <></>;
  }

  render() {
    return (
      <div className="modal-item">
        <div className="modal-item-wrapper">
          <div className="modal-item-left">
            <div className="modal-item-left-top add-input">
              <input
                id="add-input-name"
                className="add-item-input"
                placeholder="Item Name"
              ></input>
            </div>
            <div className="modal-item-left-bottom add-categories">
              <div className="add-item-bottom-left-top">
                <div className="image-icon-1">
                  <img
                    className="icon-image-small"
                    alt="carb icon"
                    src={require("../Images/Bread50-50.png")}
                  />
                </div>
                <div className="image-icon-2">
                  <img
                    className="icon-image-small"
                    alt="vegetable icon"
                    src={require("../Images/carrot50-50.png")}
                  />
                </div>
                <div className="image-icon-2">
                  <img
                    className="icon-image-small"
                    alt="fruit icon"
                    src={require("../Images/Grapes50-50.png")}
                  />
                </div>
                <div className="image-icon-2">
                  <img
                    className="icon-image-small"
                    alt="protein icon"
                    src={require("../Images/Protein50-50.png")}
                  />
                </div>
                <div className="image-icon-2">
                  <img
                    className="icon-image-small"
                    alt="drink icon"
                    src={require("../Images/Drink50-50.png")}
                  />
                </div>
                <div className="image-icon-1">
                  <img
                    className="icon-image-small"
                    alt="dessert icon"
                    src={require("../Images/Cake50-50.png")}
                  />
                </div>
              </div>
              <div className="add-item-bottom-left-bottom">
                <div className="image-icon-1-checkbox">
                  <input id="carbCheck" type="checkbox" />
                </div>
                <div className="image-icon-2-checkbox">
                  <input id="vegCheck" type="checkbox" />
                </div>
                <div className="image-icon-2-checkbox">
                  <input id="fruitCheck" type="checkbox" />
                </div>
                <div className="image-icon-2-checkbox">
                  <input id="proteinCheck" type="checkbox" />
                </div>
                <div className="image-icon-2-checkbox">
                  <input id="drinkCheck" type="checkbox" />
                </div>
                <div className="image-icon-1-checkbox">
                  <input id="dessertCheck" type="checkbox" />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-item-right">
            <div className="add-item-button-top-bottom">
              <button onClick={this.addCustomItem} className="btn itembtn">
                <span className="noselect">+Lunch</span>
                <div className="circle"></div>
              </button>
            </div>
            <div className="add-item-button-middle">
              <input
                id="add-item-quantity-input"
                className="quantity-input"
                defaultValue="0"
                type="number"
                min="0"
                text-align="center"
              ></input>
            </div>
            <div className="add-item-button-top-bottom">
              {TokenService.hasAuthToken()
                ? this.renderAuthPantryButton()
                : this.renderNoAuthPantryButton()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddItem;
