import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import App from "../App";

afterEach(() => {
  cleanup();
});

test("Home button click shows Home component ", () => {
  render(<App />);
  const homeButton = screen.getByTestId("home-button");
  fireEvent.click(homeButton);
  const homeComponent = screen.getByTestId("home-component");
  expect(homeComponent).toBeInTheDocument();
});

test("Tasks button click shows Tasks component ", () => {
  render(<App />);
  const tasksButton = screen.getByTestId("tasks-button");
  fireEvent.click(tasksButton);
  const tasksComponent = screen.getByTestId("tasks-component");
  expect(tasksComponent).toBeInTheDocument();
});
