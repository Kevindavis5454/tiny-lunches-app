import React from "react";
import ReactDOM from "react-dom";
import SearchModalItem from "../SeachModal/SearchModalItem";
import { BrowserRouter } from "react-router-dom";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <SearchModalItem />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
