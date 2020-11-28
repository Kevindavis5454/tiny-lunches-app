import React from "react";
import ReactDom from "react-dom";
import AddItem from "../AddItem/AddItem";
import ModalItem from "./ModalItem";
import PantryModalItem from "../PantryModal/PantryModalItem";
import ApiContext from "../ApiContext";

//Renders lists on Main Page

export default class ItemModal extends React.Component {
  static contextType = ApiContext;

  renderMasterNotChecked() {
    return <></>;
  }

  renderPantryNotChecked() {
    return <></>;
  }

  render() {
    if (!this.props.open) return null;

    const renderPantryList = this.props.pantryData.map((item, index) => {
      return (
        <PantryModalItem
          key={index}
          index={index}
          id={item.Id}
          quantity={item.Quantity}
          name={item.Name}
          categories={item.Categories}
          render={this.props.render}
        />
      );
    });

    const renderList = this.props.data.map((item, index) => {
      return (
        <ModalItem key={index} name={item.Name} categories={item.Categories} />
      );
    });

    return ReactDom.createPortal(
      <>
        <div className="item-modal-overlay" />
        <div className="item-modal-wrapper">
          <div className="modal-list-wrapper">
            <AddItem render={this.props.render} />
            {this.context.masterCheckBoxStatus
              ? renderList
              : this.renderMasterNotChecked()}
            {this.context.pantryCheckBoxStatus
              ? renderPantryList
              : this.renderPantryNotChecked()}
          </div>
          <div className="modal-close-wrapper">
            <button className="btn" onClick={this.props.onClose}>
              <span className="noselect">Close</span>
              <div className="circle"></div>
            </button>
          </div>
        </div>
      </>,
      document.getElementById("portal")
    );
  }
}
