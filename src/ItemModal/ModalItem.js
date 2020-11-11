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
        <div className="modal-item-wrapper">
          <div className="modal-item-left">
            <div className="modal-item-left-top">{this.props.name}</div>
            <div className="modal-item-left-bottom">
              Type: {this.props.categories}
            </div>
          </div>
          <div className="modal-item-right">
            <div className="modal-item-right-wrapper">
              <button onClick={this.addItem} className="btn itembtn">
                <span className="noselect">Add</span>
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

export default ModalItem;
