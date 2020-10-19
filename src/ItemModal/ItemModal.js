import React from "react"
import ReactDom from "react-dom"


export default function ItemModal({open, onClose}) {

    if (!open) return null

        return ReactDom.createPortal(
            <>
            <div className="item-modal-overlay" />
            <div className="item-modal-wrapper">
                <div className="modal-items-wrapper">
                        <div className="modal-item"></div>
                        <div className="modal-item"></div>
                        <div className="modal-item"></div>
                        <div className="modal-item"></div>
                        <div className="modal-item"></div>
                        <div className="modal-item"></div>
                        <div className="modal-item"></div>
                        <div className="modal-item"></div>
                        <div className="modal-item"></div>
                        <div className="modal-item"></div>
                </div>
                <div className="modal-close-wrapper">
                    <button className="modal-close-button" onClick={onClose}>Close Modal</button>
                </div>
            </div>
            </>,
            document.getElementById('portal')
        )
    }