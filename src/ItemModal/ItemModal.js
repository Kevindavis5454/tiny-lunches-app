import React from "react"
import ReactDom from "react-dom"
import ModalItem from "./ModalItem"


export default function ItemModal({open, onClose, data}) {

    if (!open) return null

    const renderList = 
        data.map((item, index) => {
            return ( <ModalItem key={index} name={item.Name} categories={item.Categories} />)
        })
    

        return ReactDom.createPortal(
            <>
            <div className="item-modal-overlay" />
            <div className="item-modal-wrapper">
                <div className="modal-items-wrapper">
                        {renderList}
                </div>
                <div className="modal-close-wrapper">
                    <button className="modal-close-button" onClick={onClose}>Close Modal</button>
                </div>
            </div>
            </>,
            document.getElementById('portal')
        )
    }