import React from "react";
import ReactDOM from "react-dom";
import SearchModalPantryItem from "../SeachModal/SearchModalPantryItem";
import { BrowserRouter } from "react-router-dom";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <SearchModalPantryItem />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
