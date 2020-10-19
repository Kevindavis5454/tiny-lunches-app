import React from 'react';
import ReactDOM from 'react-dom';
import MyLists from "./MyLists"
import {BrowserRouter} from "react-router-dom"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><MyLists /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });