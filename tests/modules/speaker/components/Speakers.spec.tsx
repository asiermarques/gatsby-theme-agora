import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AgendaContainer from "../../../../src/modules/agenda/components/AgendaContainer";
import AgendaRepository from "../../../../src/modules/agenda/domain/AgendaRepository";
import { agendaBasicStructureWithTalkStub } from "../../../__stubs__/agenda";
import { TrackContentType } from "../../../../src/modules/agenda/domain/TrackContentType";
import { speakerStub } from "../../../__stubs__/speaker";
import Speaker from "../../../../src/modules/speaker/templates/speaker";
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
