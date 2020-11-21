import React from "react";
import ReactDom from "react-dom";
import AddItem from "../AddItem/AddItem";
import PantryModalItem from "../PantryModal/PantryModalItem";

export default class PantryItemModal extends React.Component {
  state = {
    name: [],
  };

  render() {
    if (!this.props.open) return null;

    const renderList = this.props.data.map((item, index) => {
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
    return ReactDom.createPortal(
      <>
        <div className="item-modal-overlay" />
        <div className="item-modal-wrapper">
          <div className="modal-list-wrapper">
            <AddItem render={this.props.render} />
            {renderList}
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
