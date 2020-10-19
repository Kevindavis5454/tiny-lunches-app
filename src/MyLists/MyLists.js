import React from "react"


class MyLists extends React.Component {

    render () {

        return (
            <>
                <div className="my-lists-wrapper">
                    <div className="saved-lists-wrapper">
                        <div className="choose-list-wrapper">
                            <div className="choose-title-wrapper">
                                <h3>Choose your lunch!</h3>
                            </div>
                            <div className="choose-select-wrapper">
                                <select className="lunch-select">
                                    <option>Lunch 1</option>
                                    <option>Lunch 2</option>
                                    <option>Lunch 3</option>
                                    <option>Lunch 4</option>
                                    <option>Lunch 5</option>
                                </select>
                            </div>
                        </div>
                        <div className="share-my-list-wrapper">
                            <div className="share-button-wrapper border1">
                                <button>FB</button>
                            </div>
                            <div className="share-button-wrapper border1">
                                <button>Pin</button>
                            </div>
                            <div className="share-button-wrapper border1">
                                <button>Insta</button>
                            </div>
                            <div className="share-button-wrapper">
                                <button>Print</button>
                            </div>
                        </div>
                    </div>
                    <div className="my-lists-display-wrapper">
                        <div className="list-display-box">
                            <div className="my-list-item"></div>
                            <div className="my-list-item"></div>
                            <div className="my-list-item"></div>
                            <div className="my-list-item"></div>
                            <div className="my-list-item"></div>
                            <div className="my-list-item"></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default MyLists