import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Table", () => {
  it("should correctly render the table", () => {
    render(<Table />);

    expect(screen.getByText("This will be our awesome table!")).toBeDefined();
  });
});
