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
import ItemSort from "./services/item-sort-service";
import PrivateRoute from "./PrivateRoute";
import AddItem from "./AddItem/AddItem";

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
    ItemSort.getMasterList(`${config.API_ENDPOINT}/items?user_id=1`).then(
      (sortedData) => {
        this.setState({
          masterVegetable: sortedData.Vegetable,
          masterFruit: sortedData.Fruit,
          masterCarb: sortedData.Carb,
          masterProtein: sortedData.Protein,
          masterDrink: sortedData.Drink,
          masterDessert: sortedData.Dessert,
          masterCombo: sortedData.Combo,
        });
      }
    );
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
              <Route
                path="/"
                render={(routeProps) => (
                  <Header {...this.props} {...routeProps} />
                )}
              />
            </div>
            <div className="content-div">
              <Route
                exact
                path="/"
                render={(routeProps) => (
                  <MainPage data={this.state} {...this.props} {...routeProps} />
                )}
              />
              <PrivateRoute path={"/myLists"} component={MyLists} />
              <PrivateRoute
                path={"/pantry"}
                component={Pantry}
                data={this.state}
              />
              <PrivateRoute path={"/additem"} component={AddItem} />
            </div>
          </div>
        </Error>
      </ApiContext.Provider>
    );
  }
}

export default App;
