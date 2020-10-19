import React from "react"
import ReactDom from "react-dom"


export default function SignInModal({open, onClose}) {

    if (!open) return null

        return ReactDom.createPortal(
            <>
            <div className="item-modal-overlay" />
            <div className="item-modal-wrapper">
                <div className="signin-modal-wrapper">
                    <form id="sign-in-form">
                        <h3>Sign in!</h3>
                        <label>Username</label>
                        <input ></input>
                        <label>Password</label>
                        <input></input>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="signup-modal-wrapper">
                    <form id="sign-up-form">
                        <h3>Sign up!</h3>
                        <label>Display Name</label>
                        <input></input>
                        <label>Username</label>
                        <input ></input>
                        <label>Password</label>
                        <input></input>
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="modal-close-wrapper">
                    <button className="modal-close-button" onClick={onClose}>Close Modal</button>
                </div>
            </div>
            </>,
            document.getElementById('portal')
        )
    }