import { render, screen, waitFor } from "@testing-library/react";
import Tasks from "../components/Tasks";

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

test("Test if the tasks component shows the correct information from the API fetch", async () => {
  render(<Tasks />);
  await waitFor(() => expect(screen.getByText("TEST2")).toBeInTheDocument());
});
