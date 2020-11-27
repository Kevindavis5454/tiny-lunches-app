import React from "react";
import ReactDOM from "react-dom";
import SavedListItem from "../MyLists/SavedListItem";
import { BrowserRouter } from "react-router-dom";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <SavedListItem />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
