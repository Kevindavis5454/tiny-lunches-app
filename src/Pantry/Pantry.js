import React, { useState } from "react"
import ItemModal from "../ItemModal/ItemModal"

export default function Pantry (props) {

    const [isVeggieOpen, setIsVeggieOpen] = useState(false);
    const [isFruitOpen, setIsFruitOpen] = useState(false);
    const [isCarbOpen, setIsCarbOpen] = useState(false);
    const [isProteinOpen, setIsProteinOpen] = useState(false);
    const [isDrinkOpen, setIsDrinkOpen] = useState(false);
    const [isDessertOpen, setIsDessertOpen] = useState(false);
    const [isComboOpen, setIsComboOpen] = useState(false);


        return(
            <>
                <div className="pantry-page-wrapper">
                    <div className="item-categories-wrapper">
                        <div className="item-category-top-row">
                            <div className="item-wrappers-top border1">
                            <input className="icon" type="image" onClick={() => setIsCarbOpen(true)} alt="carbs" src={require("../Images/Bread50-50.png")} />
                            <ItemModal data={props.data.masterCarb} itemType="carb" open={isCarbOpen} onClose={() => setIsCarbOpen(false)} />
                            </div>
                            <div className="item-wrappers-top border1">
                            <input className="icon" type="image" onClick={() => setIsVeggieOpen(true)} alt="veggies" src={require("../Images/carrot50-50.png")} />
                            <ItemModal data={props.data.masterVegetable} itemType="veggie" open={isVeggieOpen} onClose={() => setIsVeggieOpen(false)} />
                            </div>
                            <div className="item-wrappers-top border1">
                            <input className="icon" type="image" onClick={() => setIsFruitOpen(true)} alt="fruits" src={require("../Images/Grapes50-50.png")} />
                            <ItemModal data={props.data.masterFruit} itemType="fruit" open={isFruitOpen} onClose={() => setIsFruitOpen(false)} />
                            </div>
                            <div className="item-wrappers-top border1">
                            <input className="icon" type="image" onClick={() => setIsProteinOpen(true)} alt="protein" src={require("../Images/Protein50-50.png")} />
                            <ItemModal data={props.data.masterProtein} itemType="protein" open={isProteinOpen} onClose={() => setIsProteinOpen(false)} />
                            </div>
                            <div className="item-wrappers-top">
                            <input className="icon" type="image" onClick={() => setIsDrinkOpen(true)} alt="drinks" src={require("../Images/Drink50-50.png")} />
                            <ItemModal data={props.data.masterDrink} itemType="drink" open={isDrinkOpen} onClose={() => setIsDrinkOpen(false)} />
                            </div>
                        </div>
                        <div className="item-category-bottom-row">
                            <div className="item-wrappers-bottom-left-right">
                            <input className="icon" type="image" onClick={() => setIsDessertOpen(true)} alt="dessert" src={require("../Images/Cake50-50.png")} />
                            <ItemModal data={props.data.masterDessert} itemType="dessert" open={isDessertOpen} onClose={() => setIsDessertOpen(false)} />
                            </div>
                            <div className="item-wrappers-bottom-middle border2">
                                <button>Print Shopping list</button>
                            </div>
                            <div className="item-wrappers-bottom-left-right">
                            <input className="icon" type="image" onClick={() => setIsComboOpen(true)} alt="dessert" src={require("../Images/Combo50-50.png")} />
                            <ItemModal data={props.data.masterCombo} itemType="combo" open={isComboOpen} onClose={() => setIsComboOpen(false)} />
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
        )
    }
