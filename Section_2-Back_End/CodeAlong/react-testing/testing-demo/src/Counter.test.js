import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("it renders without crashing", () => {
  render(<Counter />);
});

test("playing with queries", () => {
  const {
    getAllByText,
    getByText,
    queryByText,
    getByPlaceholderText,
    getByLabelText,
  } = render(<Counter />);
  console.log(getByLabelText("user", { exact: false }));
});

test("playing with matchers", () => {
  const { getByText, debug } = render(<Counter />);
  debug();
  const h2 = getByText("Current count: 0");
  const btn = getByText("Add");
  fireEvent.click(btn);
  expect(h2).toHaveTextContent("1");
  expect(h2).not.toHaveTextContent("0");
});
