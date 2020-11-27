import React from "react";
import ApiContext from "../ApiContext";
import config from "../config";
import updatePantryItem from "../services/update-pantry";

class PantryModalItem extends React.Component {
  static contextType = ApiContext;

  state = {
    reset: [],
    showEdit: false,
  };

  addItem = () => {
    const itemSelection = {
      Name: this.props.name,
      Categories: this.props.categories,
    };
    this.context.handleAddToLunch(itemSelection);
  };

  removeFromPantry = () => {
    fetch(`${config.API_ENDPOINT}/pantry/${this.props.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(config.TOKEN_KEY)}`,
      },
    });
    const itemRemove = document.getElementById(
      `pantryItem_${this.props.index}`
    );
    itemRemove.remove();
    alert(`${this.props.name} has been removed from your pantry`);
  };

  patchQuantity = () => {
    const quantityNumber = parseInt(
      document.getElementById(`quantityId_${this.props.index}`).value
    );
    const field = { quantity: quantityNumber };
    updatePantryItem.quantity(
      `${config.API_ENDPOINT}/pantry/${this.props.id}`,
      field
    );
  };

  patchFields = () => {
    const itemId = parseInt(this.props.id);
    const selectionCategories = [];
    const carb = document.getElementById(`carbCheck_${this.props.index}`)
      .checked;
    const veg = document.getElementById(`vegCheck_${this.props.index}`).checked;
    const fruit = document.getElementById(`fruitCheck_${this.props.index}`)
      .checked;
    const protein = document.getElementById(`proteinCheck_${this.props.index}`)
      .checked;
    const drink = document.getElementById(`drinkCheck_${this.props.index}`)
      .checked;
    const dessert = document.getElementById(`dessertCheck_${this.props.index}`)
      .checked;
    const quantityNumber = document.getElementById(
      `quantityId_${this.props.index}`
    ).value;
    const itemName = document
      .getElementById(`add-input-name_${this.props.index}`)
      .value.toLowerCase();
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
        Categories: selectionCategories,
      };
      const patchFields = {
        item_name: itemName,
        quantity: quantityNumber,
      };

      const reRenderList = async () => {
        const wait = await updatePantryItem.pantryUpdate(
          `${config.API_ENDPOINT}/pantry/${itemId}`,
          itemSelection,
          patchFields
        );

        this.props.render();
        this.setState({ showEdit: !this.state.showEdit });
      };
      reRenderList();
    } else {
      const itemSelection = {
        Categories: selectionCategories,
      };
      const patchFields = {
        item_name: itemName,
        quantity: quantityNumber,
      };

      updatePantryItem.pantryUpdate(
        `${config.API_ENDPOINT}/pantry/${itemId}`,
        itemSelection,
        patchFields
      );
      const reRenderList = async () => {
        const wait = await updatePantryItem.pantryUpdate(
          `${config.API_ENDPOINT}/pantry/${itemId}`,
          itemSelection,
          patchFields
        );

        this.props.render();
        this.setState({ showEdit: !this.state.showEdit });
      };
      reRenderList();
    }
  };

  addToShoppingList = () => {
    const itemSelection = {
      name: this.props.name,
      quantity: this.props.quantity,
      categories: this.props.categories,
    };
    this.context.handleAddToShoppingList(itemSelection);
  };

  isCheckedOrNot(string) {
    const str = this.props.categories;
    if (str.includes(string)) {
      return true;
    } else {
      return false;
    }
  }

  renderChecked() {
    const carbId = `carbCheck_${this.props.index}`;
    const vegId = `vegCheck_${this.props.index}`;
    const fruitId = `fruitCheck_${this.props.index}`;
    const proteinId = `proteinCheck_${this.props.index}`;
    const drinkId = `drinkCheck_${this.props.index}`;
    const dessertId = `dessertCheck_${this.props.index}`;
    const inputId = `add-input-name_${this.props.index}`;

    return (
      <>
        <div className="modal-item-left-top add-input">
          <input
            id={inputId}
            className="add-item-input pantry-input"
            defaultValue={this.props.name}
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
              <input
                defaultChecked={this.isCheckedOrNot("carb")}
                id={carbId}
                type="checkbox"
              />
            </div>
            <div className="image-icon-2-checkbox">
              <input
                defaultChecked={this.isCheckedOrNot("vegetable")}
                id={vegId}
                type="checkbox"
              />
            </div>
            <div className="image-icon-2-checkbox">
              <input
                defaultChecked={this.isCheckedOrNot("fruit")}
                id={fruitId}
                type="checkbox"
              />
            </div>
            <div className="image-icon-2-checkbox">
              <input
                defaultChecked={this.isCheckedOrNot("protein")}
                id={proteinId}
                type="checkbox"
              />
            </div>
            <div className="image-icon-2-checkbox">
              <input
                defaultChecked={this.isCheckedOrNot("drink")}
                id={drinkId}
                type="checkbox"
              />
            </div>
            <div className="image-icon-1-checkbox">
              <input
                defaultChecked={this.isCheckedOrNot("dessert")}
                id={dessertId}
                type="checkbox"
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  renderNotChecked() {
    return (
      <>
        <div className="modal-item-left-top">{this.props.name}</div>
        <div className="modal-item-left-bottom">
          Type: {this.props.categories}
        </div>
      </>
    );
  }

  renderButtonsChecked() {
    const pantryQuantityId = `quantityId_${this.props.index}`;
    return (
      <>
        <div className="add-item-button-top-bottom-checked">
          <button onClick={this.patchFields} className="btn itembtn">
            <span className="noselect">Update</span>
            <div className="circle"></div>
          </button>
        </div>
        <div className="add-item-button-middle">
          <input
            id={pantryQuantityId}
            className="quantity-input"
            defaultValue={this.props.quantity}
            type="number"
            min="0"
            text-align="center"
          ></input>
        </div>
      </>
    );
  }

  renderButtonsNotChecked() {
    const pantryQuantityId = `quantityId_${this.props.index}`;

    return (
      <>
        <div className="add-item-button-top-bottom">
          <button onClick={this.addToShoppingList} className="btn itembtn">
            <span className="noselect">+Shop</span>
            <div className="circle"></div>
          </button>
        </div>
        <div className="update-quantity-wrapper">
          <div className="update-quantity-left">
            <input
              id={pantryQuantityId}
              className="quantity-input"
              defaultValue={this.props.quantity}
              type="number"
              min="0"
              text-align="center"
            ></input>
          </div>
          <div className="update-quantity-right">
            <button onClick={this.patchQuantity} className="btn itembtn">
              <img
                className="logout-png"
                alt="update icon"
                src={require("../Images/update.png")}
              ></img>

              <div className="circle"></div>
            </button>
          </div>
        </div>
        <div className="add-item-button-top-bottom">
          <button onClick={this.addItem} className="btn itembtn">
            <span className="noselect">+Lunch</span>
            <div className="circle"></div>
          </button>
        </div>
      </>
    );
  }

  renderEditButton() {
    return (
      <>
        <img
          className="edit-img"
          alt="edit icon"
          src={require("../Images/edit-32.png")}
        ></img>
      </>
    );
  }

  renderXButton() {
    return (
      <>
        <img
          className="edit-img"
          alt="X icon"
          src={require("../Images/x-mark-32.png")}
        ></img>
      </>
    );
  }

  render() {
    const pantryItemId = `pantryItem_${this.props.index}`;
    const pantryEditId = `editId_${this.props.index}`;

    return (
      <div id={pantryItemId} className="modal-item">
        <div className="modal-item-wrapper">
          <div className="modal-item-left pantry">
            <div className="edit-wrapper">
              <div className="edit-wrapper-inner">
                {this.state.showEdit
                  ? this.renderXButton()
                  : this.renderEditButton()}
                <input
                  id={pantryEditId}
                  type="checkbox"
                  defaultChecked={this.state.showEdit}
                  className="edit-toggle"
                  onClick={() =>
                    this.setState({ showEdit: !this.state.showEdit })
                  }
                />
              </div>
            </div>
            {this.state.showEdit
              ? this.renderChecked()
              : this.renderNotChecked()}
            <div className="delete-button-wrapper">
              <input
                onClick={this.removeFromPantry}
                type="image"
                className="delete-button"
                alt="remove icon"
                src={require("../Images/delete-32.png")}
              />
            </div>
          </div>

          <div className="modal-item-right">
            {this.state.showEdit
              ? this.renderButtonsChecked()
              : this.renderButtonsNotChecked()}
          </div>
        </div>
      </div>
    );
  }
}

export default PantryModalItem;
