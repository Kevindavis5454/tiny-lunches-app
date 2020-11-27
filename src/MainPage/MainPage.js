import React from "react";
import ApiContext from "../ApiContext";
import ItemModal from "../ItemModal/ItemModal";
import LunchItem from "../LunchItem/LunchItem";
import PantryItemSort from "../services/pantry-sort-service";
import config from "../config";
import TokenService from "../services/token-service";
import saveLunchList from "../services/save-lunch";
import SearchModal from "../SeachModal/SearchModal";

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
    pantryListFull: [],
    pantryVegetable: [],
    pantryFruit: [],
    pantryCarb: [],
    pantryProtein: [],
    pantryDrink: [],
    pantryDessert: [],
    pantryCombo: [],
    isSearchOpen: false,
  };

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      this.reRender();
    }
  }

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

  clearLunchList = () => {
    this.context.handleClearLunchList();
  };

  handleCheckTheMasterCheckBox = () => {
    this.context.handleCheckTheMasterCheckBox();
  };
  handleCheckThePantryCheckBox = () => {
    this.context.handleCheckThePantryCheckBox();
  };
  handleCheckTheAllCheckBox = () => {
    this.context.handleCheckTheAllCheckBox();
  };

  saveLunchItems = (e) => {
    e.preventDefault();
    const lunchName = document.getElementById("saved-lunch-name").value;
    const savedItems = [];
    const sortItems = () => {
      this.context.userSelections.map((item) => {
        return savedItems.push(item.Name);
      });
    };
    sortItems();
    const lunchList = {
      user_id: localStorage.getItem("user_id"),
      title: lunchName,
      items: savedItems,
    };
    saveLunchList.saveLunch(`${config.API_ENDPOINT}/savedlunches`, lunchList);
  };

  searchMasterList = (e) => {
    e.preventDefault();
    const str = document.getElementById("search-bar-input").value;
    const searchList = this.props.data.masterListFiltered;
    const filteredList = [];
    searchList.filter((item) => {
      if (item.item_name.includes(str)) {
        return filteredList.push(item);
      }
    });
    this.context.handleFilterMasterListFiltered(filteredList);
  };

  renderCheckBoxesHasAuth() {
    return (
      <>
        <div className="icons-bottom-middle">
          <div className="list-check-top">
            <div className="list-check-left-right">Master</div>
            <div className="list-check-middle">Pantry</div>
          </div>
          <div className="list-check-bottom">
            <div className="list-check-left-right">
              <input
                onClick={this.handleCheckTheMasterCheckBox}
                defaultChecked={this.context.masterCheckBoxStatus}
                type="checkbox"
              />
            </div>
            <div className="list-check-middle">
              <input
                onClick={this.handleCheckThePantryCheckBox}
                defaultChecked={this.context.pantryCheckBoxStatus}
                type="checkbox"
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  renderCheckBoxesNoAuth() {
    return (
      <>
        <div className="icons-bottom-middle">
          <div className="list-check-top">
            <div className="list-check-no-auth">Master</div>
          </div>
          <div className="list-check-bottom">
            <div className="list-check-no-auth">
              <input
                onClick={this.handleCheckTheMasterCheckBox}
                defaultChecked={this.context.masterCheckBoxStatus}
                type="checkbox"
              />
            </div>
          </div>
        </div>
      </>
    );
  }

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
                pantryData={this.state.pantryCarb}
                data={this.props.data.masterCarb}
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
              <ItemModal
                pantryData={this.state.pantryVegetable}
                data={this.props.data.masterVegetable}
                itemType="veggie"
                open={this.state.isVeggieOpen}
                onClose={() => this.setState({ isVeggieOpen: false })}
                render={this.reRender}
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
                pantryData={this.state.pantryFruit}
                data={this.props.data.masterFruit}
                itemType="fruit"
                open={this.state.isFruitOpen}
                onClose={() => this.setState({ isFruitOpen: false })}
                render={this.reRender}
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
                pantryData={this.state.pantryProtein}
                data={this.props.data.masterProtein}
                itemType="protein"
                open={this.state.isProteinOpen}
                onClose={() => this.setState({ isProteinOpen: false })}
                render={this.reRender}
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
                pantryData={this.state.pantryDrink}
                data={this.props.data.masterDrink}
                itemType="drink"
                open={this.state.isDrinkOpen}
                onClose={() => this.setState({ isDrinkOpen: false })}
                render={this.reRender}
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
                pantryData={this.state.pantryDessert}
                data={this.props.data.masterDessert}
                itemType="dessert"
                open={this.state.isDessertOpen}
                onClose={() => this.setState({ isDessertOpen: false })}
                render={this.reRender}
              />
            </div>
            {TokenService.hasAuthToken()
              ? this.renderCheckBoxesHasAuth()
              : this.renderCheckBoxesNoAuth()}
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
                pantryData={this.state.pantryCombo}
                data={this.props.data.masterCombo}
                itemType="combo"
                open={this.state.isComboOpen}
                onClose={() => this.setState({ isComboOpen: false })}
                render={this.reRender}
              />
            </div>
          </div>
        </div>
        <div className="lunch-menu-wrapper">
          <div className="lunch-menu-inner-wrapper">
            <form
              onSubmit={this.searchMasterList}
              className="search-form-wrapper"
            >
              <div className="search-bar-wrapper">
                <input
                  required
                  id="search-bar-input"
                  className="search-bar"
                  placeholder="Mashed Potatoes"
                />
              </div>
              <div className="search-button-wrapper">
                <button
                  onClick={() => this.setState({ isSearchOpen: true })}
                  type="submit"
                  id="search-btn"
                  className="btn"
                >
                  <span className="noselect">Search</span>
                  <div className="circle"></div>
                </button>
                <SearchModal
                  data={this.props.data.masterListFiltered}
                  open={this.state.isSearchOpen}
                  onClose={() => this.setState({ isSearchOpen: false })}
                  render={this.context.reRenderMasterLists}
                />
              </div>
            </form>
            <div className="lunch-items-wrapper">
              <div className="modal-list-wrapper">{renderList}</div>
            </div>
            <form
              onSubmit={this.saveLunchItems}
              className="lunch-save-button-wrapper"
            >
              <div className="upper-savedLunch-wrapper">
                <input
                  required
                  id="saved-lunch-name"
                  className="saved-lunch-input"
                  placeholder="My Lunches Name"
                />
              </div>
              <div className="lower-savedLunch-wrapper">
                <button type="submit" className="btn">
                  <span className="noselect">Save</span>
                  <div className="circle"></div>
                </button>
                <button className="btn" onClick={this.clearLunchList}>
                  <span className="noselect">Clear</span>
                  <div className="circle"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
