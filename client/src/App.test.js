import React from "react";
//wimport ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test("contain title of the page", () => {
  const container = render(<App />);
  console.log(container);
  container.getByText("Women's World Cup Player");
});

test("contain Alex Morgan", () => {
  const playerList = render(<App />);
  console.log(playerList);
  playerList.queryByDisplayValue("Alex Morgan");
});

test("contain USA in countries", () => {
  const country = render(<App />);
  console.log(country);
  country.queryAllByDisplayValue("United States");
});
