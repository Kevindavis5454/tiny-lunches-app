import React from "react";
import PantryItemModal from "../PantryModal/PantryItemModal";
import PantryItemSort from "../services/pantry-sort-service";
import config from "../config";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import ShoppingListItem from "../ShoppingList/ShoppingListItem";
import ApiContext from "../ApiContext";

export default class Pantry extends React.Component {
  static contextType = ApiContext;

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

  reRender = () => {
    const user = localStorage.getItem("user_id");
    PantryItemSort.getPantryList(
      `${config.API_ENDPOINT}/pantry/users/${user}`
    ).then((sortedData) => {
      this.setState({
        pantryVegetable: sortedData.Vegetable,
        pantryFruit: sortedData.Fruit,
        pantryCarb: sortedData.Carb,
        pantryProtein: sortedData.Protein,
        pantryDrink: sortedData.Drink,
        pantryDessert: sortedData.Dessert,
        pantryCombo: sortedData.Combo,
      });
    });
  };

  componentDidMount() {
    const user = localStorage.getItem("user_id");
    PantryItemSort.getPantryList(
      `${config.API_ENDPOINT}/pantry/users/${user}`
    ).then((sortedData) => {
      this.setState({
        pantryVegetable: sortedData.Vegetable,
        pantryFruit: sortedData.Fruit,
        pantryCarb: sortedData.Carb,
        pantryProtein: sortedData.Protein,
        pantryDrink: sortedData.Drink,
        pantryDessert: sortedData.Dessert,
        pantryCombo: sortedData.Combo,
      });
    });
  }

  clearShoppingList = () => {
    this.context.handleClearShoppingList();
  };

  render() {
    const renderList = this.props.data.map((item, index) => {
      return (
        <ShoppingListItem
          key={index}
          name={item.name}
          categories={item.categories}
          quantity={item.quantity}
        />
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
              <PantryItemModal
                data={this.state.pantryCarb}
                itemType="carb"
                open={this.state.isCarbOpen}
                onClose={() => this.setState({ isCarbOpen: false })}
                render={this.reRender}
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
              <PantryItemModal
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
              <PantryItemModal
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
              <PantryItemModal
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
              <PantryItemModal
                data={this.state.pantryDrink}
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
              <PantryItemModal
                data={this.state.pantryDessert}
                itemType="dessert"
                open={this.state.isDessertOpen}
                onClose={() => this.setState({ isDessertOpen: false })}
              />
            </div>
            <div className="item-wrappers-bottom-middle border2">
              <ReactToPrint
                content={() => this.componentRef}
                copyStyles={false}
              >
                <PrintContextConsumer>
                  {({ handlePrint }) => (
                    <button
                      id="print-btn"
                      className="btn"
                      onClick={handlePrint}
                    >
                      <span className="noselect">Print</span>
                      <div className="circle"></div>
                    </button>
                  )}
                </PrintContextConsumer>
              </ReactToPrint>
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
              <PantryItemModal
                data={this.state.pantryCombo}
                itemType="combo"
                open={this.state.isComboOpen}
                onClose={() => this.setState({ isComboOpen: false })}
              />
            </div>
          </div>
        </div>
        <div className="lunch-menu-wrapper">
          <div className="lunch-menu-inner-wrapper">
            <div className="shopping-list-title">
              <h2>Shopping List</h2>
            </div>
            <div className="lunch-items-wrapper">
              <div
                className="shopping-list-display"
                ref={(el) => (this.componentRef = el)}
              >
                {renderList}
              </div>
            </div>
            <div className="shopping-list-clear-button-wrapper">
              <button className="btn" onClick={this.clearShoppingList}>
                <span className="noselect">Clear</span>
                <div className="circle"></div>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
