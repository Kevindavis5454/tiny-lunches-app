import React, { useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import LunchItem from "../LunchItem/LunchItem";

export default function MainPage(props) {
  const [isVeggieOpen, setIsVeggieOpen] = useState(false);
  const [isFruitOpen, setIsFruitOpen] = useState(false);
  const [isCarbOpen, setIsCarbOpen] = useState(false);
  const [isProteinOpen, setIsProteinOpen] = useState(false);
  const [isDrinkOpen, setIsDrinkOpen] = useState(false);
  const [isDessertOpen, setIsDessertOpen] = useState(false);
  const [isComboOpen, setIsComboOpen] = useState(false);

  const renderList = props.data.userSelections.map((item, index) => {
    return (
      <LunchItem key={index} name={item.Name} categories={item.Categories} />
    );
  });

  return (
    <>
      <div className="search-wrapper">
        <div className="icons-wrapper">
          <div className="icons-top border1">
            <input
              className="icon"
              type="image"
              onClick={() => setIsCarbOpen(true)}
              alt="carbs"
              src={require("../Images/Bread50-50.png")}
            />
            <ItemModal
              data={props.data.masterCarb}
              itemType="carb"
              open={isCarbOpen}
              onClose={() => setIsCarbOpen(false)}
            />
          </div>
          <div className="icons-top border1">
            <input
              className="icon"
              type="image"
              onClick={() => setIsVeggieOpen(true)}
              alt="veggies"
              src={require("../Images/carrot50-50.png")}
            />
            <ItemModal
              data={props.data.masterVegetable}
              itemType="veggie"
              open={isVeggieOpen}
              onClose={() => setIsVeggieOpen(false)}
            />
          </div>
          <div className="icons-top border1">
            <input
              className="icon"
              type="image"
              onClick={() => setIsFruitOpen(true)}
              alt="fruits"
              src={require("../Images/Grapes50-50.png")}
            />
            <ItemModal
              data={props.data.masterFruit}
              itemType="fruit"
              open={isFruitOpen}
              onClose={() => setIsFruitOpen(false)}
            />
          </div>
          <div className="icons-top border1">
            <input
              className="icon"
              type="image"
              onClick={() => setIsProteinOpen(true)}
              alt="protein"
              src={require("../Images/Protein50-50.png")}
            />
            <ItemModal
              data={props.data.masterProtein}
              itemType="protein"
              open={isProteinOpen}
              onClose={() => setIsProteinOpen(false)}
            />
          </div>
          <div className="icons-top">
            <input
              className="icon"
              type="image"
              onClick={() => setIsDrinkOpen(true)}
              alt="drinks"
              src={require("../Images/Drink50-50.png")}
            />
            <ItemModal
              data={props.data.masterDrink}
              itemType="drink"
              open={isDrinkOpen}
              onClose={() => setIsDrinkOpen(false)}
            />
          </div>
        </div>
        <div className="icons-wrapper-bottom">
          <div className="icons-bottom-left-right">
            <input
              className="icon"
              type="image"
              onClick={() => setIsDessertOpen(true)}
              alt="dessert"
              src={require("../Images/Cake50-50.png")}
            />
            <ItemModal
              data={props.data.masterDessert}
              itemType="dessert"
              open={isDessertOpen}
              onClose={() => setIsDessertOpen(false)}
            />
          </div>
          <div className="icons-bottom-middle border2">
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
            <input
              className="icon"
              type="image"
              onClick={() => setIsComboOpen(true)}
              alt="dessert"
              src={require("../Images/Combo50-50.png")}
            />
            <ItemModal
              data={props.data.masterCombo}
              itemType="combo"
              open={isComboOpen}
              onClose={() => setIsComboOpen(false)}
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
              <button className="search-button">Search</button>
            </div>
          </form>
          <div className="lunch-items-wrapper">
            <div className="lunch-items-inner-wrapper">{renderList}</div>
          </div>
          <div className="lunch-save-button-wrapper">
            <button className="lunch-save-button">Save</button>
            <button className="lunch-clear-button">Clear</button>
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
          <button className="randomize-button">Randomize!</button>
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
