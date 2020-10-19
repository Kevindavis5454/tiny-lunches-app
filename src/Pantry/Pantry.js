import React from "react"

class Pantry extends React.Component {

    render () {

        return(
            <>
                <div className="pantry-page-wrapper">
                    <div className="item-categories-wrapper">
                        <div className="item-category-top-row">
                            <div className="item-wrappers-top border1">
                                <img className="icon" alt="carbs" src={require("../Images/Bread50-50.png")}></img>
                            </div>
                            <div className="item-wrappers-top border1">
                                <img className="icon" alt="veggies" src={require("../Images/carrot50-50.png")}></img>
                            </div>
                            <div className="item-wrappers-top border1">
                                <img className="icon" alt="fruits" src={require("../Images/Grapes50-50.png")}></img>
                            </div>
                            <div className="item-wrappers-top border1">
                                <img className="icon" alt="protein" src={require("../Images/Protein50-50.png")}></img>
                            </div>
                            <div className="item-wrappers-top">
                                <img className="icon" alt="drinks" src={require("../Images/Drink50-50.png")}></img>
                            </div>
                        </div>
                        <div className="item-category-bottom-row">
                            <div className="item-wrappers-bottom-left-right">
                                <img className="icon" alt="dessert" src={require("../Images/Cake50-50.png")}></img>
                            </div>
                            <div className="item-wrappers-bottom-middle border2">
                                <button>Print Shopping list</button>
                            </div>
                            <div className="item-wrappers-bottom-left-right">
                                <img className="icon" alt="dessert" src={require("../Images/Combo50-50.png")}></img>
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
}

export default Pantry