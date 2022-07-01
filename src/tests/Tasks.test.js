import { render, screen, waitFor } from "@testing-library/react";
import Tasks from "../components/Tasks";

//this is a mock fetch. Will replace any fetch that runs on the test and return this mock response
global.fetch = () =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          text: "TEST1",
          completed: false,
        },
        {
          id: 2,
          text: "TEST2",
          completed: false,
        },
      ]),
  });

test("Tasks component shows the correct information from the API", async () => {
  render(<Tasks />);
  //need to wait for the fetch to resolve so we can see if the data from the API is being shown correctly. If we don't wait the tasks are empty right after the render
  await waitFor(() => expect(screen.getByText("TEST2")).toBeInTheDocument());
});
