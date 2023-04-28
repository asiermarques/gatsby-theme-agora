import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Link } from "../../../../src/modules/link/domain/Link";
import Nav from "../../../../src/modules/link/components/Nav";

describe("Nav Component", () => {
  it("Should show the links when there is links data", () => {
    const data: Link[] = [
      {
        link: "https://test.com",
        name: "Test Link",
      },
      {
        link: "https://test.com",
        name: "Test Link2",
      },
    ];
    render(<Nav items={data} />);
    expect(screen.getByRole("list", {})).toHaveTextContent("Test Link");
    expect(screen.getByRole("list", {})).toHaveTextContent("Test Link2");
  });
});
