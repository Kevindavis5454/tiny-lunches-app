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
import GetAllData from "./services/get-all-data";
import TokenService from "./services/token-service";
import About from "./About/About";

class App extends React.Component {
  state = {
    masterListFull: [],
    masterListFiltered: [],
    masterVegetable: [],
    masterFruit: [],
    masterCarb: [],
    masterProtein: [],
    masterDrink: [],
    masterDessert: [],
    masterCombo: [],
    userSelections: [],
    name: [],
    masterCheckBox: true,
    pantryCheckBox: false,
    shoppingList: [],
  };

  componentDidMount() {
    this.getMasterList();
    this.reRenderMasterLists();
  }

  //Renders the master list for the Demo / Base App

  getMasterList = () => {
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
  };

  // Below reRenders the Search list so that the data is up to date incase you make changes on the search list

  reRenderMasterLists = () => {
    GetAllData.getMasterData(`${config.API_ENDPOINT}/items?user_id=1`).then(
      (data1) => {
        const array1 = [];
        const array2 = [];

        array1.push(data1);
        if (TokenService.hasAuthToken()) {
          GetAllData.getMasterPantryData(
            `${config.API_ENDPOINT}/pantry/users/${localStorage.getItem(
              "user_id"
            )}`
          ).then((data2) => {
            array2.push(data2);
            const combined = array1.concat(array2);
            const joined = [].concat.apply([], combined);

            this.setState({
              masterListFull: joined,
              masterListFiltered: joined,
            });
          });
        } else {
          this.setState({
            masterListFull: data1,
            masterListFiltered: data1,
          });
        }
      }
    );
  };

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

  addToShoppingList = (item) => {
    this.setState((previousState) => ({
      shoppingList: [...previousState.shoppingList, item],
    }));
  };

  removeFromShoppingList = (item) => {
    let array = Array.from(this.state.shoppingList);
    let index = this.state.shoppingList.findIndex((x) => x.Name === item.Name);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ shoppingList: array });
    }
  };

  clearShoppingList = () => {
    this.setState({
      shoppingList: [],
    });
  };

  checkTheMasterCheckBox = () => {
    this.setState({ masterCheckBox: !this.state.masterCheckBox });
  };
  checkThePantryCheckBox = () => {
    this.setState({ pantryCheckBox: !this.state.pantryCheckBox });
  };

  filterMasterListFiltered = (filter) => {
    this.setState({
      masterListFiltered: filter,
    });
  };

  render() {
    const value = {
      userSelections: this.state.userSelections,
      handleAddToLunch: this.addToLunch,
      handleRemoveFromLunch: this.removeFromLunch,
      handleClearLunchList: this.clearLunchList,
      handleCheckTheMasterCheckBox: this.checkTheMasterCheckBox,
      handleCheckThePantryCheckBox: this.checkThePantryCheckBox,
      masterCheckBoxStatus: this.state.masterCheckBox,
      pantryCheckBoxStatus: this.state.pantryCheckBox,
      shoppingList: this.state.shoppingList,
      handleAddToShoppingList: this.addToShoppingList,
      handleRemoveFromShoppingList: this.removeFromShoppingList,
      handleClearShoppingList: this.clearShoppingList,
      reRenderMasterLists: this.reRenderMasterLists,
      masterListFiltered: this.state.masterListFiltered,
      masterListFull: this.state.masterListFull,
      handleFilterMasterListFiltered: this.filterMasterListFiltered,
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
                  <About {...this.props} {...routeProps} />
                )}
              />
              <Route
                path="/main"
                render={(routeProps) => (
                  <MainPage data={this.state} {...this.props} {...routeProps} />
                )}
              />
              <PrivateRoute path={"/myLists"} component={MyLists} />
              <PrivateRoute
                path={"/pantry"}
                component={Pantry}
                data={this.state.shoppingList}
              />
            </div>
          </div>
        </Error>
      </ApiContext.Provider>
    );
  }
}

export default App;
