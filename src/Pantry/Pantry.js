import React from "react";
import ItemModal from "../ItemModal/ItemModal";
import ItemSort from "../services/item-sort-service";
import config from "../config";

export default class Pantry extends React.Component {
  state = {
    isVeggieOpen: false,
    isFruitOpen: false,
    isCarbOpen: false,
    isProteinOpen: false,
    isDrinkOpen: false,
    isDessertOpen: false,
    isComboOpen: false,
    pantryListFull: [],
    pantryVegetable: [],
    pantryFruit: [],
    pantryCarb: [],
    pantryProtein: [],
    pantryDrink: [],
    pantryDessert: [],
    pantryCombo: [],
  };

  componentDidMount() {
    const user = localStorage.getItem("user_id");
    ItemSort.getMasterList(`${config.API_ENDPOINT}/pantry/users/${user}`).then(
      (sortedData) => {
        this.setState({
          pantryVegetable: sortedData.Vegetable,
          pantryFruit: sortedData.Fruit,
          pantryCarb: sortedData.Carb,
          pantryProtein: sortedData.Protein,
          pantryDrink: sortedData.Drink,
          pantryDessert: sortedData.Dessert,
          pantryCombo: sortedData.Combo,
        });
      }
    );
  }

  render() {
    return (
      <>
        <div className="pantry-page-wrapper">
          <div className="item-categories-wrapper">
            <div className="item-category-top-row">
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
                  data={this.state.pantryCarb}
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
                  data={this.state.pantryVegetable}
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
                  data={this.state.pantryFruit}
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
                  data={this.state.pantryProtein}
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
                  data={this.state.pantryDrink}
                  itemType="drink"
                  open={this.state.isDrinkOpen}
                  onClose={() => this.setState({ isDrinkOpen: false })}
                />
              </div>
            </div>
            <div className="item-category-bottom-row">
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
                  data={this.state.pantryDessert}
                  itemType="dessert"
                  open={this.state.isDessertOpen}
                  onClose={() => this.setState({ isDessertOpen: false })}
                />
              </div>
              <div className="item-wrappers-bottom-middle border2">
                <button id="print-btn" className="btn">
                  <span className="noselect">Print</span>
                  <div className="circle"></div>
                </button>
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
                  data={this.state.pantryCombo}
                  itemType="combo"
                  open={this.state.isComboOpen}
                  onClose={() => this.setState({ isComboOpen: false })}
                />
              </div>
            </div>
          </div>
          <div className="shopping-list-wrapper">
            <div className="shopping-list-title">
              <h2>Shopping List</h2>
            </div>
            <div className="shopping-list-display-wrapper">
              <div className="shopping-list-display">
                <div className="shopping-item"></div>
                <div className="shopping-item"></div>
                <div className="shopping-item"></div>
                <div className="shopping-item"></div>
                <div className="shopping-item"></div>
                <div className="shopping-item"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
