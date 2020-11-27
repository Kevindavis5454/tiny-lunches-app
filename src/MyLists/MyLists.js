import React from "react";
import config from "../config";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import saveLunchList from "../services/save-lunch";

class MyLists extends React.Component {
  state = {
    lists: [],
    selectedList: [],
  };

  componentDidMount() {
    const user = localStorage.getItem("user_id");
    const token = localStorage.getItem(config.TOKEN_KEY);
    const getUserLists = () => {
      fetch(`${config.API_ENDPOINT}/savedlunches/users/${user}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((lists) => {
          const masterListofLists = [];
          const sortLists = () => {
            lists.map((list) => {
              return masterListofLists.push(list);
            });
            this.setState({
              lists: masterListofLists,
            });
          };
          sortLists();
        });
    };
    getUserLists();
  }

  reRender = () => {
    const user = localStorage.getItem("user_id");
    const token = localStorage.getItem(config.TOKEN_KEY);
    const getUserLists = () => {
      fetch(`${config.API_ENDPOINT}/savedlunches/users/${user}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((lists) => {
          const masterListofLists = [];
          const sortLists = () => {
            lists.map((list) => {
              return masterListofLists.push(list);
            });
            this.setState({
              lists: masterListofLists,
            });
          };
          sortLists();
        });
    };
    getUserLists();
  };

  handleSetSelectedList = () => {
    this.setState({ selectedList: [] });
  };

  deleteSavedList = () => {
    const sel = document.getElementById("list-select");
    const selected = sel.options[sel.selectedIndex];
    const extra = selected.getAttribute("data");
    const remove = selected.getAttribute("data-remove-id");

    saveLunchList.deleteLunch(`${config.API_ENDPOINT}/savedlunches/${extra}`);
    document.getElementById(remove).remove();
    this.reRender();
    // optionRemove.remove();
  };

  render() {
    const savedListSelect = document.getElementById("list-select");

    const renderLists = this.state.lists.map((list, index) => {
      const optionId = `option_${list.id}`;
      return (
        <option
          id={optionId}
          data-remove-id={optionId}
          data={list.id}
          value={list.title}
          key={index}
        >
          {list.title}
        </option>
      );
    });

    const renderListItems = this.state.lists.map((item) => {
      const selectedList = savedListSelect.value;
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
                  defaultValue="selected"
                  onChange={this.handleSetSelectedList}
                  id="list-select"
                  className="lunch-select"
                >
                  {renderLists}
                  <option value="selected">Select a Lunch</option>
                </select>
              </div>
            </div>
          </div>
          <div className="my-lists-display-wrapper">
            <div
              className="modal-list-wrapper"
              ref={(el) => (this.componentRef = el)}
            >
              {renderListItems}
            </div>
          </div>
          <div className="share-my-list-wrapper">
            <div className="share-button-wrapper">
              <ReactToPrint
                content={() => this.componentRef}
                copyStyles={false}
              >
                <PrintContextConsumer>
                  {({ handlePrint }) => (
                    <button className="btn" onClick={handlePrint}>
                      <span className="noselect">Print</span>
                      <div className="circle"></div>
                    </button>
                  )}
                </PrintContextConsumer>
              </ReactToPrint>
            </div>
            <div className="delete-lunch-wrapper">
              <button onClick={this.deleteSavedList} className="btn">
                <span className="noselect">Delete</span>
                <div className="circle"></div>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MyLists;
