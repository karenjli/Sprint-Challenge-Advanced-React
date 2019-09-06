import React from "react";
import PlayerList from "./player-list";
import { render } from "@testing-library/react";

test("contain all items from data", () => {
  const list = render(<PlayerList />);
  console.log(list);
  list.queryAllByText("Name");
  list.queryAllByText("Country");
  list.queryAllByText("Searches");
});
