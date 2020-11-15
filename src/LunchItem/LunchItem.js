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
        <div className="modal-item-wrapper">
          <div className="modal-item-left">
            <div className="modal-item-left-top">{this.props.name}</div>
            <div className="modal-item-left-bottom">
              Type: {this.props.categories}
            </div>
          </div>
          <div className="modal-item-right">
            <div className="modal-item-right-wrapper">
              <button onClick={this.removeItem} className="btn itembtn">
                <span className="noselect">Remove</span>
                <div className="circle"></div>
              </button>
            </div>
            <div className="modal-item-right-wrapper">
              <button className="btn itembtn">
                <span className="noselect">Pantry</span>
                <div className="circle"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LunchItem;
