import React from "react";

class MyLists extends React.Component {
  render() {
    return (
      <>
        <div className="my-lists-wrapper">
          <div className="saved-lists-wrapper">
            <div className="choose-list-wrapper">
              <div className="choose-title-wrapper">
                <h3>Choose your lunch!</h3>
              </div>
              <div className="choose-select-wrapper">
                <select className="lunch-select">
                  <option>Lunch 1</option>
                  <option>Lunch 2</option>
                  <option>Lunch 3</option>
                  <option>Lunch 4</option>
                  <option>Lunch 5</option>
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
                  <button className="noselect">Print</button>
                  <div className="circleIcon"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-lists-display-wrapper">
            <div className="list-display-box">
              <div className="my-list-item"></div>
              <div className="my-list-item"></div>
              <div className="my-list-item"></div>
              <div className="my-list-item"></div>
              <div className="my-list-item"></div>
              <div className="my-list-item"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MyLists;
