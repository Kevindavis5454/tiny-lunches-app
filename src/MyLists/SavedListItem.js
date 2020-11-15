import React from "react";
import ApiContext from "../ApiContext";

class SavedListItem extends React.Component {
  static contextType = ApiContext;

  removeItem = () => {
    const itemSelection = {
      Name: this.props.name,
      Categories: this.props.categories,
    };
    console.log(itemSelection, "preremoval");
    this.context.handleRemoveFromLunch(itemSelection);
  };

  render() {
    return (
      <div className="modal-item">
        <div className="modal-item-left">
          <div className="modal-item-left-top">{this.props.name}</div>
          <div className="modal-item-left-bottom">{this.props.categories}</div>
        </div>
        <div className="modal-item-right">
          <button onClick={this.removeItem}>Remove</button>
        </div>
      </div>
    );
  }
}

export default SavedListItem;
