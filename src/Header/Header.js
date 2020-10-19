import React, { useState } from "react"
import {Link} from "react-router-dom"
import SignInModal from "../SignInModal/SignInModal"

export default function Header() {

    const [ isOpen, setIsOpen ] = useState(false)

    
        return (
            <>
                <div className="logo-div">
                    <img id="tiny-logo" alt="tiny lunches logo" src={require("./TinyLunchesCropped.png")}></img>
                </div>
                <button onClick={() => setIsOpen(true)} className="signUp-signIn">🔐</button>
                <SignInModal open={isOpen} onClose={() => setIsOpen(false)} />
                <div className="menu-wrapper">
                    <input type="checkbox" className="toggle"></input>
                    <div className="hamburger">
                        <div className="bar"></div>
                    </div>
                    <div className="menu">
                        <ul>
                            <li onClick={document.getElementsByClassName('toggle').checked = true}><Link to="/">Home</Link></li>
                            <li onClick={document.getElementsByClassName('toggle').checked = true}><Link to="/myLists">My Saved Lunches</Link></li>
                            <li onClick={document.getElementsByClassName('toggle').checked = true}><Link to="/pantry">Pantry</Link></li>
                        </ul>
                    </div>
                </div>
                <nav className='large-screen-nav'>
                    <ul className='nav'>
                        <li><Link to="#">Menu 1</Link></li>
                        <li><Link to="#">Menu 2</Link></li>
                        <li><Link to="#">Menu 3</Link></li>
                        <li><Link to="#">Menu 4</Link></li>
                    </ul>
                </nav>
            </>
        )
    }