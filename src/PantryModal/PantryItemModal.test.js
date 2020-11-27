import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import PantryItemModal from "./PantryItemModal";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <PantryItemModal />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
