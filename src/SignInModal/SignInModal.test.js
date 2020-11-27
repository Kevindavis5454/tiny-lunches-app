import React from "react";
import ReactDOM from "react-dom";
import SignInModal from "../SignInModal/SignInModal";
import { BrowserRouter } from "react-router-dom";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <SignInModal />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
