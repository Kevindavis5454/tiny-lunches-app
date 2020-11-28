import React from "react";
import ApiContext from "../ApiContext";

//Items that get Rendered on the Lunch List on Main Page

class LunchItem extends React.Component {
  static contextType = ApiContext;

  removeItem = () => {
    const itemSelection = {
      Name: this.props.name,
      Categories: this.props.categories,
    };
    this.context.handleRemoveFromLunch(itemSelection);
  };

  render() {
    const divId = `lunch-item-${this.props.index}`;
    return (
      <div id={divId} className="modal-item">
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
