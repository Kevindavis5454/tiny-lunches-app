import React from "react";
import ReactDom from "react-dom";
import AddItem from "../AddItem/AddItem";
import SearchModalItem from "./SearchModalItem";
import SearchModalPantryItem from "./SearchModalPantryItem";

export default class SearchModal extends React.Component {
  reRenderAllData = () => {
    this.props.render();
    this.props.onClose();
  };

  render() {
    if (!this.props.open) return null;
    console.log(this.props, "Search modal Props");
    const renderList = this.props.data.map((item, index) => {
      if (item.quantity) {
        const categoryList = [];
        if (item.category_1 !== null) {
          categoryList.push(item.category_1);
        }
        if (item.category_2 !== null) {
          categoryList.push(item.category_2);
        }
        if (item.category_3 !== null) {
          categoryList.push(item.category_3);
        }
        if (item.category_4 !== null) {
          categoryList.push(item.category_4);
        }
        if (item.category_5 !== null) {
          categoryList.push(item.category_5);
        }
        if (item.category_6 !== null) {
          categoryList.push(item.category_6);
        }
        if (item.category_7 !== null) {
          categoryList.push(item.category_7);
        }
        return (
          <SearchModalPantryItem
            key={index}
            index={index}
            id={item.id}
            quantity={item.quantity}
            name={item.item_name}
            categories={categoryList}
            render={this.props.render}
          />
        );
      } else {
        const categoryList = [];
        if (item.category_1 !== null) {
          categoryList.push(item.category_1);
        }
        if (item.category_2 !== null) {
          categoryList.push(item.category_2);
        }
        if (item.category_3 !== null) {
          categoryList.push(item.category_3);
        }
        if (item.category_4 !== null) {
          categoryList.push(item.category_4);
        }
        if (item.category_5 !== null) {
          categoryList.push(item.category_5);
        }
        if (item.category_6 !== null) {
          categoryList.push(item.category_6);
        }
        if (item.category_7 !== null) {
          categoryList.push(item.category_7);
        }
        return (
          <SearchModalItem
            key={index}
            name={item.item_name}
            categories={categoryList}
          />
        );
      }
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
            <button className="btn" onClick={this.reRenderAllData}>
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
