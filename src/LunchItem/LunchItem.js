import React from "react";
import ApiContext from "../ApiContext";

class LunchItem extends React.Component {
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
        {this.props.name}
        <br></br>
        {this.props.categories}
        <button onClick={this.removeItem}>Remove from Lunch</button>
      </div>
    );
  }
}

export default LunchItem;
