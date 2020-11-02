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
        {this.props.name}
        <br></br>
        {this.props.categories}
        <button onClick={this.addItem}>Add to Lunch</button>
      </div>
    );
  }
}

export default ModalItem;
