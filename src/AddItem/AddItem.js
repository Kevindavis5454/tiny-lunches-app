import React from "react";
import ApiContext from "../ApiContext";
import addNewCustomItem from "../services/add-custom-item";
import config from "../config";

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
        Name: document.getElementById("add-input-name").value,
        Categories: selectionCategories.toString().toLowerCase(),
      };
      console.log(itemSelection, "if item selection");
      this.context.handleAddToLunch(itemSelection);
    } else {
      const itemSelection = {
        Name: document.getElementById("add-input-name").value,
        Categories: selectionCategories.toString().toLowerCase(),
      };
      console.log(itemSelection, "else item selection");
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
        Name: document.getElementById("add-input-name").value.toLowerCase(),
        Categories: selectionCategories,
      };
      console.log(itemSelection, "if item selection");
      addNewCustomItem.toPantry(`${config.API_ENDPOINT}/pantry`, itemSelection);
    } else {
      const itemSelection = {
        Name: document.getElementById("add-input-name").value.toLowerCase(),
        Categories: selectionCategories,
      };
      console.log(itemSelection, "else item selection");
      addNewCustomItem.toPantry(`${config.API_ENDPOINT}/pantry`, itemSelection);
    }
  };

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
                    src={require("../Images/Bread50-50.png")}
                  />
                </div>
                <div className="image-icon-2">
                  <img
                    className="icon-image-small"
                    src={require("../Images/carrot50-50.png")}
                  />
                </div>
                <div className="image-icon-2">
                  <img
                    className="icon-image-small"
                    src={require("../Images/Grapes50-50.png")}
                  />
                </div>
                <div className="image-icon-2">
                  <img
                    className="icon-image-small"
                    src={require("../Images/Protein50-50.png")}
                  />
                </div>
                <div className="image-icon-2">
                  <img
                    className="icon-image-small"
                    src={require("../Images/Drink50-50.png")}
                  />
                </div>
                <div className="image-icon-1">
                  <img
                    className="icon-image-small"
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
                <span className="noselect">Add</span>
                <div className="circle"></div>
              </button>
            </div>
            <div className="add-item-button-middle">
              <input
                className="quantity-input"
                defaultValue="0"
                type="number"
                min="0"
                text-align="center"
              ></input>
            </div>
            <div className="add-item-button-top-bottom">
              <button
                onClick={this.addCustomItemToPantry}
                className="btn itembtn"
              >
                <span className="noselect">Pantry</span>
                <div className="circle"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddItem;
