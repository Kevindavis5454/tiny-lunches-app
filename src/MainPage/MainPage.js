import React from "react";
import ApiContext from "../ApiContext";
import ItemModal from "../ItemModal/ItemModal";
import LunchItem from "../LunchItem/LunchItem";

class MainPage extends React.Component {
  static contextType = ApiContext;

  state = {
    isVeggieOpen: false,
    isFruitOpen: false,
    isCarbOpen: false,
    isProteinOpen: false,
    isDrinkOpen: false,
    isDessertOpen: false,
    isComboOpen: false,
  };

  clearLunchList = () => {
    this.context.handleClearLunchList();
  };

  render() {
    const renderList = this.props.data.userSelections.map((item, index) => {
      return (
        <LunchItem key={index} name={item.Name} categories={item.Categories} />
      );
    });

    return (
      <>
        <div className="search-wrapper">
          <div className="icons-wrapper">
            <div className="icons-top">
              <div
                className="btnIcon"
                onClick={() => this.setState({ isCarbOpen: true })}
              >
                <input
                  className="icon noselect"
                  type="image"
                  alt="carbs"
                  src={require("../Images/Bread50-50.png")}
                />
                <div className="circleIcon"></div>
              </div>
              <ItemModal
                data={this.props.data.masterCarb}
                itemType="carb"
                open={this.state.isCarbOpen}
                onClose={() => this.setState({ isCarbOpen: false })}
              />
            </div>
            <div className="icons-top">
              <div
                className="btnIcon"
                onClick={() => this.setState({ isVeggieOpen: true })}
              >
                <input
                  className="icon noselect"
                  type="image"
                  alt="veggies"
                  src={require("../Images/carrot50-50.png")}
                />
                <div className="circleIcon"></div>
              </div>
              <ItemModal
                data={this.props.data.masterVegetable}
                itemType="veggie"
                open={this.state.isVeggieOpen}
                onClose={() => this.setState({ isVeggieOpen: false })}
              />
            </div>
            <div className="icons-top">
              <div
                className="btnIcon"
                onClick={() => this.setState({ isFruitOpen: true })}
              >
                <input
                  className="icon noselect"
                  type="image"
                  alt="fruits"
                  src={require("../Images/Grapes50-50.png")}
                />
                <div className="circleIcon"></div>
              </div>
              <ItemModal
                data={this.props.data.masterFruit}
                itemType="fruit"
                open={this.state.isFruitOpen}
                onClose={() => this.setState({ isFruitOpen: false })}
              />
            </div>
            <div className="icons-top">
              <div
                className="btnIcon"
                onClick={() => this.setState({ isProteinOpen: true })}
              >
                <input
                  className="icon noselect"
                  type="image"
                  alt="protein"
                  src={require("../Images/Protein50-50.png")}
                />
                <div className="circleIcon"></div>
              </div>
              <ItemModal
                data={this.props.data.masterProtein}
                itemType="protein"
                open={this.state.isProteinOpen}
                onClose={() => this.setState({ isProteinOpen: false })}
              />
            </div>
            <div className="icons-top">
              <div
                className="btnIcon"
                onClick={() => this.setState({ isDrinkOpen: true })}
              >
                <input
                  className="icon noselect"
                  type="image"
                  alt="drinks"
                  src={require("../Images/Drink50-50.png")}
                />
                <div className="circleIcon"></div>
              </div>
              <ItemModal
                data={this.props.data.masterDrink}
                itemType="drink"
                open={this.state.isDrinkOpen}
                onClose={() => this.setState({ isDrinkOpen: false })}
              />
            </div>
          </div>
          <div className="icons-wrapper-bottom">
            <div className="icons-bottom-left-right">
              <div
                className="btnIcon"
                onClick={() => this.setState({ isDessertOpen: true })}
              >
                <input
                  className="icon noselect"
                  type="image"
                  alt="dessert"
                  src={require("../Images/Cake50-50.png")}
                />
                <div className="circleIcon"></div>
              </div>
              <ItemModal
                data={this.props.data.masterDessert}
                itemType="dessert"
                open={this.state.isDessertOpen}
                onClose={() => this.setState({ isDessertOpen: false })}
              />
            </div>
            <div className="icons-bottom-middle">
              <div className="list-check-top">
                <div className="list-check-left-right">Master</div>
                <div className="list-check-middle">Pantry</div>
                <div className="list-check-left-right">All</div>
              </div>
              <div className="list-check-bottom">
                <div className="list-check-left-right">
                  <input type="checkbox" />
                </div>
                <div className="list-check-middle">
                  <input type="checkbox" />
                </div>
                <div className="list-check-left-right">
                  <input type="checkbox" />
                </div>
              </div>
            </div>
            <div className="icons-bottom-left-right">
              <div
                className="btnIcon"
                onClick={() => this.setState({ isComboOpen: true })}
              >
                <input
                  className="icon noselect"
                  type="image"
                  alt="dessert"
                  src={require("../Images/Combo50-50.png")}
                />
                <div className="circleIcon"></div>
              </div>
              <ItemModal
                data={this.props.data.masterCombo}
                itemType="combo"
                open={this.state.isComboOpen}
                onClose={() => this.setState({ isComboOpen: false })}
              />
            </div>
          </div>
        </div>
        <div className="lunch-menu-wrapper">
          <div className="lunch-menu-inner-wrapper">
            <form className="search-form-wrapper">
              <div className="search-bar-wrapper">
                <input
                  className="search-bar"
                  placeholder="Peanut Butter Jelly Sandwich"
                />
              </div>
              <div className="search-button-wrapper">
                <button id="search-btn" className="btn">
                  <span className="noselect">Search</span>
                  <div className="circle"></div>
                </button>
              </div>
            </form>
            <div className="lunch-items-wrapper">
              <div className="modal-list-wrapper">{renderList}</div>
            </div>
            <div className="lunch-save-button-wrapper">
              <button className="btn">
                <span className="noselect">Save</span>
                <div className="circle"></div>
              </button>
              <button className="btn" onClick={this.clearLunchList}>
                <span className="noselect">Clear</span>
                <div className="circle"></div>
              </button>
            </div>
          </div>
          <div className="item-count-wrapper">
            <div className="item-count-inner-wrapper">
              <div className="item-count"></div>
              <div className="item-count"></div>
              <div className="item-count"></div>
              <div className="item-count"></div>
              <div className="item-count"></div>
              <div className="item-count"></div>
              <div className="item-count"></div>
            </div>
          </div>
        </div>
        <form className="randomize-wrapper">
          <div className="randomize-button-wrapper">
            <button className="btn">
              <span className="noselect">Randomize</span>
              <div className="circle"></div>
            </button>
          </div>
          <div className="randomize-checkboxes-wrapper">
            <div className="randomize-title-wrapper">
              <span>Check the categories to Randomize!</span>
            </div>
            <div className="checkboxes-wrapper">
              <div className="checkboxes-left">
                <div className="checkbox1">
                  <div className="checkbox">
                    <div className="checkbox-left">
                      <label>Veggie</label>
                    </div>
                    <div className="checkbox-right">
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
                <div className="checkbox2">
                  <div className="checkbox">
                    <div className="checkbox-left">
                      <label>Fruit</label>
                    </div>
                    <div className="checkbox-right">
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
                <div className="checkbox3">
                  <div className="checkbox">
                    <div className="checkbox-left">
                      <label>Protein</label>
                    </div>
                    <div className="checkbox-right">
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="checkboxes-right">
                <div className="checkbox1">
                  <div className="checkbox">
                    <div className="checkbox-left">
                      <label>Carb</label>
                    </div>
                    <div className="checkbox-right">
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
                <div className="checkbox2">
                  <div className="checkbox">
                    <div className="checkbox-left">
                      <label>Drink</label>
                    </div>
                    <div className="checkbox-right">
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
                <div className="checkbox3">
                  <div className="checkbox">
                    <div className="checkbox-left">
                      <label>Dessert</label>
                    </div>
                    <div className="checkbox-right">
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default MainPage;
