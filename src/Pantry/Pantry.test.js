import React from 'react';
import ReactDOM from 'react-dom';
import Pantry from "./Pantry"
import {BrowserRouter} from "react-router-dom"


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Pantry /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });