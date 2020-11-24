import React from "react";
import config from "../config";
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

class MyLists extends React.Component {
  state = {
    lists: [],
    selectedList: [],
  };

  componentDidMount() {
    const user = localStorage.getItem("user_id");
    const token = localStorage.getItem(config.TOKEN_KEY);
    console.log(user, "local user");
    const getUserLists = () => {
      fetch(`${config.API_ENDPOINT}/savedlunches/${user}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((lists) => {
          const masterListofLists = [];
          masterListofLists.push(lists);
          this.setState({
            lists: masterListofLists,
          });
          console.log(this.state.lists, "state lists");
        });
    };
    getUserLists();
  }

  handleSetSelectedList = () => {
    this.setState({ selectedList: [] });
  };

  render() {
    const savedListSelect = document.getElementById("list-select");

    const renderLists = this.state.lists.map((list, index) => {
      return (
        <option value={list.title} key={index}>
          {list.title}
        </option>
      );
    });

    const renderListItems = this.state.lists.map((item) => {
      const selectedList = savedListSelect.value;
      console.log(selectedList, "selected list");
      if (item.title == selectedList) {
        return item.items.map((food, index) => {
          return (
            <div key={index} className="modal-item">
              <div className="saved-list-item">{food}</div>
            </div>
          );
        });
      }
    });

    return (
      <>
        <div className="my-lists-wrapper">
          <div className="saved-lists-wrapper">
            <div className="choose-list-wrapper">
              <div className="choose-title-wrapper">
                <h3>Choose your lunch!</h3>
              </div>
              <div className="choose-select-wrapper">
                <select
                  onChange={this.handleSetSelectedList}
                  id="list-select"
                  className="lunch-select"
                >
                  {renderLists}
                  <option>Select a Lunch</option>
                </select>
              </div>
            </div>
            <div className="share-my-list-wrapper">
              <div className="share-button-wrapper">
                <div className="btnIcon">
                  <button className="noselect">Facebook</button>
                  <div className="circleIcon"></div>
                </div>
              </div>
              <div className="share-button-wrapper">
                <div className="btnIcon">
                  <button className="noselect">Pinterest</button>
                  <div className="circleIcon"></div>
                </div>
              </div>
              <div className="share-button-wrapper">
                <div className="btnIcon">
                  <button className="noselect">Instagram</button>
                  <div className="circleIcon"></div>
                </div>
              </div>
              <div className="share-button-wrapper">
                <div className="btnIcon">
                  <ReactToPrint content={() => this.componentRef} copyStyles= {false}>
                  <PrintContextConsumer>
                    {({ handlePrint }) => (
                      <button id="print-btn" className="noselect" onClick={handlePrint}>
                      <span>Print</span>
                      <div className="circleIcon"></div>
                      </button>
                    )}
                  </PrintContextConsumer>
                  </ReactToPrint>
                </div>
              </div>
            </div>
          </div>
          <div className="my-lists-display-wrapper">
            <div className="modal-list-wrapper" ref={el => (this.componentRef = el)}>{renderListItems}</div>
          </div>
        </div>
      </>
    );
  }
}

export default MyLists;
