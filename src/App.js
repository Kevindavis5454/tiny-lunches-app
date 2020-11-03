import React from "react";
import { Route } from "react-router-dom";
import "./main.css";
import Header from "./Header/Header";
import MainPage from "./MainPage/MainPage";
import Error from "./Error";
import MyLists from "./MyLists/MyLists";
import Pantry from "./Pantry/Pantry";
import config from "./config";
import ApiContext from "./ApiContext";

class App extends React.Component {
  state = {
    masterListFull: [],
    masterVegetable: [],
    masterFruit: [],
    masterCarb: [],
    masterProtein: [],
    masterDrink: [],
    masterDessert: [],
    masterCombo: [],
    userSelections: [],
  };

  componentDidMount() {
    const getMasterList = () => {
      return fetch(`${config.API_ENDPOINT}/api/items?user_id=1`).then((res) =>
        res.json()
      );
    };

    getMasterList().then((items) => {
      const masterVegetableHolding = [];
      const masterFruitHolding = [];
      const masterCarbHolding = [];
      const masterProteinHolding = [];
      const masterDrinkHolding = [];
      const masterDessertHolding = [];
      const masterComboHolding = [];
      const vegetables = () => {
        items.map((veg) => {
          if (
            veg.category_1 === "vegetable" ||
            veg.category_2 === "vegetable" ||
            veg.category_3 === "vegetable" ||
            veg.category_4 === "vegetable" ||
            veg.category_5 === "vegetable" ||
            veg.category_6 === "vegetable" ||
            veg.category_7 === "vegetable"
          ) {
            if (veg.category_7 !== null)
              return masterVegetableHolding.push({
                Name: veg.item_name,
                Categories: `${veg.category_1}, ${veg.category_2}, ${veg.category_3}, ${veg.category_4}
            , ${veg.category_5}, ${veg.category_6}, ${veg.category_7}`,
              });
            if (veg.category_6 !== null)
              return masterVegetableHolding.push({
                Name: veg.item_name,
                Categories: `${veg.category_1}, ${veg.category_2}, ${veg.category_3}, ${veg.category_4}
            , ${veg.category_5}, ${veg.category_6}`,
              });
            if (veg.category_5 !== null)
              return masterVegetableHolding.push({
                Name: veg.item_name,
                Categories: `${veg.category_1}, ${veg.category_2}, ${veg.category_3}, ${veg.category_4}
            , ${veg.category_5}`,
              });
            if (veg.category_4 !== null)
              return masterVegetableHolding.push({
                Name: veg.item_name,
                Categories: `${veg.category_1}, ${veg.category_2}, ${veg.category_3}, ${veg.category_4}`,
              });
            if (veg.category_3 !== null)
              return masterVegetableHolding.push({
                Name: veg.item_name,
                Categories: `${veg.category_1}, ${veg.category_2}, ${veg.category_3}`,
              });
            if (veg.category_2 !== null)
              return masterVegetableHolding.push({
                Name: veg.item_name,
                Categories: `${veg.category_1}, ${veg.category_2}`,
              });
            if (veg.category_1 !== null)
              return masterVegetableHolding.push({
                Name: veg.item_name,
                Categories: `${veg.category_1}`,
              });
          }
        });
      };
      const fruits = () => {
        items.map((fruit) => {
          if (
            fruit.category_1 === "fruit" ||
            fruit.category_2 === "fruit" ||
            fruit.category_3 === "fruit" ||
            fruit.category_4 === "fruit" ||
            fruit.category_5 === "fruit" ||
            fruit.category_6 === "fruit" ||
            fruit.category_7 === "fruit"
          ) {
            if (fruit.category_7 !== null)
              return masterFruitHolding.push({
                Name: fruit.item_name,
                Categories: `${fruit.category_1}, ${fruit.category_2}, ${fruit.category_3}, ${fruit.category_4}
            , ${fruit.category_5}, ${fruit.category_6}, ${fruit.category_7}`,
              });
            if (fruit.category_6 !== null)
              return masterFruitHolding.push({
                Name: fruit.item_name,
                Categories: `${fruit.category_1}, ${fruit.category_2}, ${fruit.category_3}, ${fruit.category_4}
            , ${fruit.category_5}, ${fruit.category_6}`,
              });
            if (fruit.category_5 !== null)
              return masterFruitHolding.push({
                Name: fruit.item_name,
                Categories: `${fruit.category_1}, ${fruit.category_2}, ${fruit.category_3}, ${fruit.category_4}
            , ${fruit.category_5}`,
              });
            if (fruit.category_4 !== null)
              return masterFruitHolding.push({
                Name: fruit.item_name,
                Categories: `${fruit.category_1}, ${fruit.category_2}, ${fruit.category_3}, ${fruit.category_4}`,
              });
            if (fruit.category_3 !== null)
              return masterFruitHolding.push({
                Name: fruit.item_name,
                Categories: `${fruit.category_1}, ${fruit.category_2}, ${fruit.category_3}`,
              });
            if (fruit.category_2 !== null)
              return masterFruitHolding.push({
                Name: fruit.item_name,
                Categories: `${fruit.category_1}, ${fruit.category_2}`,
              });
            if (fruit.category_1 !== null)
              return masterFruitHolding.push({
                Name: fruit.item_name,
                Categories: `${fruit.category_1}`,
              });
          }
        });
      };
      const carbs = () => {
        items.map((carb) => {
          if (
            carb.category_1 === "carb" ||
            carb.category_2 === "carb" ||
            carb.category_3 === "carb" ||
            carb.category_4 === "carb" ||
            carb.category_5 === "carb" ||
            carb.category_6 === "carb" ||
            carb.category_7 === "carb"
          ) {
            if (carb.category_7 !== null)
              return masterCarbHolding.push({
                Name: carb.item_name,
                Categories: `${carb.category_1}, ${carb.category_2}, ${carb.category_3}, ${carb.category_4}
            , ${carb.category_5}, ${carb.category_6}, ${carb.category_7}`,
              });
            if (carb.category_6 !== null)
              return masterCarbHolding.push({
                Name: carb.item_name,
                Categories: `${carb.category_1}, ${carb.category_2}, ${carb.category_3}, ${carb.category_4}
            , ${carb.category_5}, ${carb.category_6}`,
              });
            if (carb.category_5 !== null)
              return masterCarbHolding.push({
                Name: carb.item_name,
                Categories: `${carb.category_1}, ${carb.category_2}, ${carb.category_3}, ${carb.category_4}
            , ${carb.category_5}`,
              });
            if (carb.category_4 !== null)
              return masterCarbHolding.push({
                Name: carb.item_name,
                Categories: `${carb.category_1}, ${carb.category_2}, ${carb.category_3}, ${carb.category_4}`,
              });
            if (carb.category_3 !== null)
              return masterCarbHolding.push({
                Name: carb.item_name,
                Categories: `${carb.category_1}, ${carb.category_2}, ${carb.category_3}`,
              });
            if (carb.category_2 !== null)
              return masterCarbHolding.push({
                Name: carb.item_name,
                Categories: `${carb.category_1}, ${carb.category_2}`,
              });
            if (carb.category_1 !== null)
              return masterCarbHolding.push({
                Name: carb.item_name,
                Categories: `${carb.category_1}`,
              });
          }
        });
      };
      const proteins = () => {
        items.map((protein) => {
          if (
            protein.category_1 === "protein" ||
            protein.category_2 === "protein" ||
            protein.category_3 === "protein" ||
            protein.category_4 === "protein" ||
            protein.category_5 === "protein" ||
            protein.category_6 === "protein" ||
            protein.category_7 === "protein"
          ) {
            if (protein.category_7 !== null)
              return masterProteinHolding.push({
                Name: protein.item_name,
                Categories: `${protein.category_1}, ${protein.category_2}, ${protein.category_3}, ${protein.category_4}
            , ${protein.category_5}, ${protein.category_6}, ${protein.category_7}`,
              });
            if (protein.category_6 !== null)
              return masterProteinHolding.push({
                Name: protein.item_name,
                Categories: `${protein.category_1}, ${protein.category_2}, ${protein.category_3}, ${protein.category_4}
            , ${protein.category_5}, ${protein.category_6}`,
              });
            if (protein.category_5 !== null)
              return masterProteinHolding.push({
                Name: protein.item_name,
                Categories: `${protein.category_1}, ${protein.category_2}, ${protein.category_3}, ${protein.category_4}
            , ${protein.category_5}`,
              });
            if (protein.category_4 !== null)
              return masterProteinHolding.push({
                Name: protein.item_name,
                Categories: `${protein.category_1}, ${protein.category_2}, ${protein.category_3}, ${protein.category_4}`,
              });
            if (protein.category_3 !== null)
              return masterProteinHolding.push({
                Name: protein.item_name,
                Categories: `${protein.category_1}, ${protein.category_2}, ${protein.category_3}`,
              });
            if (protein.category_2 !== null)
              return masterProteinHolding.push({
                Name: protein.item_name,
                Categories: `${protein.category_1}, ${protein.category_2}`,
              });
            if (protein.category_1 !== null)
              return masterProteinHolding.push({
                Name: protein.item_name,
                Categories: `${protein.category_1}`,
              });
          }
        });
      };
      const drinks = () => {
        items.map((drink) => {
          if (
            drink.category_1 === "drink" ||
            drink.category_2 === "drink" ||
            drink.category_3 === "drink" ||
            drink.category_4 === "drink" ||
            drink.category_5 === "drink" ||
            drink.category_6 === "drink" ||
            drink.category_7 === "drink"
          ) {
            if (drink.category_7 !== null)
              return masterDrinkHolding.push({
                Name: drink.item_name,
                Categories: `${drink.category_1}, ${drink.category_2}, ${drink.category_3}, ${drink.category_4}
            , ${drink.category_5}, ${drink.category_6}, ${drink.category_7}`,
              });
            if (drink.category_6 !== null)
              return masterDrinkHolding.push({
                Name: drink.item_name,
                Categories: `${drink.category_1}, ${drink.category_2}, ${drink.category_3}, ${drink.category_4}
            , ${drink.category_5}, ${drink.category_6}`,
              });
            if (drink.category_5 !== null)
              return masterDrinkHolding.push({
                Name: drink.item_name,
                Categories: `${drink.category_1}, ${drink.category_2}, ${drink.category_3}, ${drink.category_4}
            , ${drink.category_5}`,
              });
            if (drink.category_4 !== null)
              return masterDrinkHolding.push({
                Name: drink.item_name,
                Categories: `${drink.category_1}, ${drink.category_2}, ${drink.category_3}, ${drink.category_4}`,
              });
            if (drink.category_3 !== null)
              return masterDrinkHolding.push({
                Name: drink.item_name,
                Categories: `${drink.category_1}, ${drink.category_2}, ${drink.category_3}`,
              });
            if (drink.category_2 !== null)
              return masterDrinkHolding.push({
                Name: drink.item_name,
                Categories: `${drink.category_1}, ${drink.category_2}`,
              });
            if (drink.category_1 !== null)
              return masterDrinkHolding.push({
                Name: drink.item_name,
                Categories: `${drink.category_1}`,
              });
          }
        });
      };
      const desserts = () => {
        items.map((dessert) => {
          if (
            dessert.category_1 === "dessert" ||
            dessert.category_2 === "dessert" ||
            dessert.category_3 === "dessert" ||
            dessert.category_4 === "dessert" ||
            dessert.category_5 === "dessert" ||
            dessert.category_6 === "dessert" ||
            dessert.category_7 === "dessert"
          ) {
            if (dessert.category_7 !== null)
              return masterDessertHolding.push({
                Name: dessert.item_name,
                Categories: `${dessert.category_1}, ${dessert.category_2}, ${dessert.category_3}, ${dessert.category_4}
            , ${dessert.category_5}, ${dessert.category_6}, ${dessert.category_7}`,
              });
            if (dessert.category_6 !== null)
              return masterDessertHolding.push({
                Name: dessert.item_name,
                Categories: `${dessert.category_1}, ${dessert.category_2}, ${dessert.category_3}, ${dessert.category_4}
            , ${dessert.category_5}, ${dessert.category_6}`,
              });
            if (dessert.category_5 !== null)
              return masterDessertHolding.push({
                Name: dessert.item_name,
                Categories: `${dessert.category_1}, ${dessert.category_2}, ${dessert.category_3}, ${dessert.category_4}
            , ${dessert.category_5}`,
              });
            if (dessert.category_4 !== null)
              return masterDessertHolding.push({
                Name: dessert.item_name,
                Categories: `${dessert.category_1}, ${dessert.category_2}, ${dessert.category_3}, ${dessert.category_4}`,
              });
            if (dessert.category_3 !== null)
              return masterDessertHolding.push({
                Name: dessert.item_name,
                Categories: `${dessert.category_1}, ${dessert.category_2}, ${dessert.category_3}`,
              });
            if (dessert.category_2 !== null)
              return masterDessertHolding.push({
                Name: dessert.item_name,
                Categories: `${dessert.category_1}, ${dessert.category_2}`,
              });
            if (dessert.category_1 !== null)
              return masterDessertHolding.push({
                Name: dessert.item_name,
                Categories: `${dessert.category_1}`,
              });
          }
        });
      };
      const combos = () => {
        items.map((combo) => {
          if (
            combo.category_1 === "combo" ||
            combo.category_2 === "combo" ||
            combo.category_3 === "combo" ||
            combo.category_4 === "combo" ||
            combo.category_5 === "combo" ||
            combo.category_6 === "combo" ||
            combo.category_7 === "combo"
          ) {
            if (combo.category_7 !== null)
              return masterComboHolding.push({
                Name: combo.item_name,
                Categories: `${combo.category_1}, ${combo.category_2}, ${combo.category_3}, ${combo.category_4}
            , ${combo.category_5}, ${combo.category_6}, ${combo.category_7}`,
              });
            if (combo.category_6 !== null)
              return masterComboHolding.push({
                Name: combo.item_name,
                Categories: `${combo.category_1}, ${combo.category_2}, ${combo.category_3}, ${combo.category_4}
            , ${combo.category_5}, ${combo.category_6}`,
              });
            if (combo.category_5 !== null)
              return masterComboHolding.push({
                Name: combo.item_name,
                Categories: `${combo.category_1}, ${combo.category_2}, ${combo.category_3}, ${combo.category_4}
            , ${combo.category_5}`,
              });
            if (combo.category_4 !== null)
              return masterComboHolding.push({
                Name: combo.item_name,
                Categories: `${combo.category_1}, ${combo.category_2}, ${combo.category_3}, ${combo.category_4}`,
              });
            if (combo.category_3 !== null)
              return masterComboHolding.push({
                Name: combo.item_name,
                Categories: `${combo.category_1}, ${combo.category_2}, ${combo.category_3}`,
              });
            if (combo.category_7 !== null)
              return masterComboHolding.push({
                Name: combo.item_name,
                Categories: `${combo.category_1}, ${combo.category_2}`,
              });
            if (combo.category_7 !== null)
              return masterComboHolding.push({
                Name: combo.item_name,
                Categories: `${combo.category_1}`,
              });
          }
        });
      };
      vegetables();
      fruits();
      carbs();
      proteins();
      drinks();
      desserts();
      combos();
      this.setState({
        masterListFull: items,
        masterVegetable: masterVegetableHolding,
        masterFruit: masterFruitHolding,
        masterCarb: masterCarbHolding,
        masterProtein: masterProteinHolding,
        masterDrink: masterDrinkHolding,
        masterDessert: masterDessertHolding,
        masterCombo: masterComboHolding,
      });
      console.log(this.state.masterVegetable, "master Veg list");
      console.log(this.state.masterFruit, "master Fruit list");
      console.log(this.state.masterCarb, "master Carb list");
      console.log(this.state.masterProtein, "master Protein list");
      console.log(this.state.masterDrink, "master Drink list");
      console.log(this.state.masterDessert, "master Dessert list");
      console.log(this.state.masterCombo, "master Combo list");
      console.log(items, "master list");
      console.log(this.state.masterListFull, "master list in state");
    });
  }

  addToLunch = (itemSelection) => {
    this.setState((previousState) => ({
      userSelections: [...previousState.userSelections, itemSelection],
    }));
  };

  removeFromLunch = (itemSelection) => {
    let array = Array.from(this.state.userSelections);
    let index = this.state.userSelections.findIndex(
      (x) => x.Name === itemSelection.Name
    );
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ userSelections: array });
    }
  };

  clearLunchList = () => {
    this.setState({
      userSelections: [],
    });
  };

  render() {
    console.log(this.state.userSelections, "user selections");

    const value = {
      userSelections: this.state.userSelections,
      handleAddToLunch: this.addToLunch,
      handleRemoveFromLunch: this.removeFromLunch,
      handleClearLunchList: this.clearLunchList,
    };

    return (
      <ApiContext.Provider value={value}>
        <Error>
          <div className="main-div">
            <div className="header-div">
              <Header />
            </div>
            <div className="content-div">
              <Route
                exact
                path="/"
                render={(routeProps) => (
                  <MainPage data={this.state} {...this.props} {...routeProps} />
                )}
              />
              <Route
                path="/myLists"
                render={(routeProps) => (
                  <MyLists {...this.props} {...routeProps} />
                )}
              />
              <Route
                path="/pantry"
                render={(routeProps) => (
                  <Pantry data={this.state} {...this.props} {...routeProps} />
                )}
              />
            </div>
          </div>
        </Error>
      </ApiContext.Provider>
    );
  }
}

export default App;
