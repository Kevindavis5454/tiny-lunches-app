import React from "react";
import ApiContext from "../ApiContext";

class ModalItem extends React.Component {
  static contextType = ApiContext;

  addItem = () => {
    const itemSelection = {
      Name: this.props.name,
      Categories: this.props.categories,
    };
    this.context.handleAddToLunch(itemSelection);
  };

  render() {
    return (
      <div className="modal-item">
        <div className="modal-item-left">
          <div className="modal-item-left-top">{this.props.name}</div>
          <div className="modal-item-left-bottom">{this.props.categories}</div>
        </div>
        <div className="modal-item-right">
          <button onClick={this.addItem}>Add to Lunch</button>
        </div>
      </div>
    );
  }
}

export default ModalItem;
