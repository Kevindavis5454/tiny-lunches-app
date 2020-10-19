import React from 'react';
import { Route } from "react-router-dom"
import "./main.css"
import Header from './Header/Header';
import MainPage from "./MainPage/MainPage"
import Error from "./Error"
import MyLists from './MyLists/MyLists';
import Pantry from './Pantry/Pantry';

class App extends React.Component {

  state = {

  }

  render () {
  return (
    <Error>
      <div className="main-div">
        <div className="header-div">
          <Header />
        </div>
        <div className="content-div">
          <Route exact path="/" render={routeProps => (
            <MainPage
              {...this.props}
              {...routeProps}
            />)}
          />
          <Route path="/myLists" render={routeProps => (
            <MyLists
              {...this.props}
              {...routeProps}
            />)}
          />
          <Route path="/pantry" render={routeProps => (
            <Pantry
              {...this.props}
              {...routeProps}
            />)}
          />  
        </div>
      </div>
    </Error>
  )
  }
}

export default App;
