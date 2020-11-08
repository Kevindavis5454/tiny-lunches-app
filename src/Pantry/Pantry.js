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
    ItemSort.getMasterList(`${config.API_ENDPOINT}/items?user_id=1`).then(
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
              <div className="item-wrappers-top border1">
                <input
                  className="icon"
                  type="image"
                  onClick={() => this.setState({ isCarbOpen: true })}
                  alt="carbs"
                  src={require("../Images/Bread50-50.png")}
                />
                <ItemModal
                  data={this.state.pantryCarb}
                  itemType="carb"
                  open={this.state.isCarbOpen}
                  onClose={() => this.setState({ isCarbOpen: false })}
                />
              </div>
              <div className="item-wrappers-top border1">
                <input
                  className="icon"
                  type="image"
                  onClick={() => this.setState({ isVeggieOpen: true })}
                  alt="veggies"
                  src={require("../Images/carrot50-50.png")}
                />
                <ItemModal
                  data={this.state.pantryVegetable}
                  itemType="veggie"
                  open={this.state.isVeggieOpen}
                  onClose={() => this.setState({ isVeggieOpen: false })}
                />
              </div>
              <div className="item-wrappers-top border1">
                <input
                  className="icon"
                  type="image"
                  onClick={() => this.setState({ isFruitOpen: true })}
                  alt="fruits"
                  src={require("../Images/Grapes50-50.png")}
                />
                <ItemModal
                  data={this.state.pantryFruit}
                  itemType="fruit"
                  open={this.state.isFruitOpen}
                  onClose={() => this.setState({ isFruitOpen: false })}
                />
              </div>
              <div className="item-wrappers-top border1">
                <input
                  className="icon"
                  type="image"
                  onClick={() => this.setState({ isProteinOpen: true })}
                  alt="protein"
                  src={require("../Images/Protein50-50.png")}
                />
                <ItemModal
                  data={this.state.pantryProtein}
                  itemType="protein"
                  open={this.state.isProteinOpen}
                  onClose={() => this.setState({ isProteinOpen: false })}
                />
              </div>
              <div className="item-wrappers-top">
                <input
                  className="icon"
                  type="image"
                  onClick={() => this.setState({ isDrinkOpen: true })}
                  alt="drinks"
                  src={require("../Images/Drink50-50.png")}
                />
                <ItemModal
                  data={this.state.pantryDrink}
                  itemType="drink"
                  open={this.state.isDrinkOpen}
                  onClose={() => this.setState({ isDrinkOpen: false })}
                />
              </div>
            </div>
            <div className="item-category-bottom-row">
              <div className="item-wrappers-bottom-left-right">
                <input
                  className="icon"
                  type="image"
                  onClick={() => this.setState({ isDessertOpen: true })}
                  alt="dessert"
                  src={require("../Images/Cake50-50.png")}
                />
                <ItemModal
                  data={this.state.pantryDessert}
                  itemType="dessert"
                  open={this.state.isDessertOpen}
                  onClose={() => this.setState({ isDessertOpen: false })}
                />
              </div>
              <div className="item-wrappers-bottom-middle border2">
                <button>Print Shopping list</button>
              </div>
              <div className="item-wrappers-bottom-left-right">
                <input
                  className="icon"
                  type="image"
                  onClick={() => this.setState({ isComboOpen: true })}
                  alt="dessert"
                  src={require("../Images/Combo50-50.png")}
                />
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
      </>
    );
  }
}
