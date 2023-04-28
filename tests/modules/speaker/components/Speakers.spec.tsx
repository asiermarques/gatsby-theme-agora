import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { speakerStub } from "../../../__stubs__/speaker";
import Speakers from "../../../../src/modules/speaker/components/Speakers";

describe("Speakers Component", () => {
  it("Should show the speakers when there is speakers data", () => {
    const data = [speakerStub()];
    render(<Speakers speakers={data} />);

    expect(screen.getByRole("heading", {})).toHaveTextContent("Speaker Name");
    expect(screen.getByRole("link", {})).toHaveTextContent(
      "Speaker company role"
    );
  });
});
