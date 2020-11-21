import React from "react";
import ReactDom from "react-dom";
import AddItem from "../AddItem/AddItem";
import PantryModalItem from "../PantryModal/PantryModalItem";

export default function PantryItemModal({ open, onClose, data }) {
  if (!open) return null;

  const renderList = data.map((item, index) => {
    return (
      <PantryModalItem
        key={index}
        index={index}
        id={item.Id}
        quantity={item.Quantity}
        name={item.Name}
        categories={item.Categories}
      />
    );
  });

  return ReactDom.createPortal(
    <>
      <div className="item-modal-overlay" />
      <div className="item-modal-wrapper">
        <div className="modal-list-wrapper">
          <AddItem />
          {renderList}
        </div>
        <div className="modal-close-wrapper">
          <button className="btn" onClick={onClose}>
            <span className="noselect">Close</span>
            <div className="circle"></div>
          </button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
