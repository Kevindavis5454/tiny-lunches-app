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
    console.log(quantityNumber, "quantity number");
    const field = { quantity: quantityNumber };
    updatePantryItem.quantity(
      `${config.API_ENDPOINT}/pantry/${this.props.id}`,
      field
    );
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
    return (
      <>
        <div className="modal-item-left-top add-input">
          <input
            id="add-input-name"
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
                id="carbCheck"
                type="checkbox"
              />
            </div>
            <div className="image-icon-2-checkbox">
              <input
                defaultChecked={this.isCheckedOrNot("vegetable")}
                id="vegCheck"
                type="checkbox"
              />
            </div>
            <div className="image-icon-2-checkbox">
              <input
                defaultChecked={this.isCheckedOrNot("fruit")}
                id="fruitCheck"
                type="checkbox"
              />
            </div>
            <div className="image-icon-2-checkbox">
              <input
                defaultChecked={this.isCheckedOrNot("protein")}
                id="proteinCheck"
                type="checkbox"
              />
            </div>
            <div className="image-icon-2-checkbox">
              <input
                defaultChecked={this.isCheckedOrNot("drink")}
                id="drinkCheck"
                type="checkbox"
              />
            </div>
            <div className="image-icon-1-checkbox">
              <input
                defaultChecked={this.isCheckedOrNot("dessert")}
                id="dessertCheck"
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
    return (
      <>
        <div className="add-item-button-top-bottom">
          <button className="btn itembtn">
            <span className="noselect">Update</span>
            <div className="circle"></div>
          </button>
        </div>
        <div className="add-item-button-middle">
          <input
            className="quantity-input"
            defaultValue={this.props.quantity}
            type="number"
            min="0"
            text-align="center"
          ></input>
        </div>
        <div className="add-item-button-top-bottom">
          <button onClick={this.removeFromPantry} className="btn itembtn">
            <span className="noselect">Remove</span>
            <div className="circle"></div>
          </button>
        </div>
      </>
    );
  }

  renderButtonsNotChecked() {
    const pantryQuantityId = `quantityId_${this.props.index}`;

    return (
      <>
        <div className="add-item-button-top-bottom">
          <button onClick={this.addItem} className="btn itembtn">
            <span className="noselect">Lunch</span>
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
          <button onClick={this.removeFromPantry} className="btn itembtn">
            <span className="noselect">Remove</span>
            <div className="circle"></div>
          </button>
        </div>
      </>
    );
  }

  render() {
    const pantryItemId = `pantryItem_${this.props.index}`;
    const pantryQuantityId = `quantityId_${this.props.index}`;
    const pantryEditId = `editId_${this.props.index}`;
    return (
      <div id={pantryItemId} className="modal-item">
        <div className="modal-item-wrapper">
          <div className="modal-item-left pantry">
            <div className="edit-wrapper">
              <div className="edit-wrapper-inner">
                <img
                  className="edit-img"
                  alt="update icon"
                  src={require("../Images/edit-32.png")}
                ></img>
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
