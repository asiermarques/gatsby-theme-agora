import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AgendaContainer from "../../../../src/modules/agenda/components/AgendaContainer";
import AgendaRepository from "../../../../src/modules/agenda/domain/AgendaRepository";
import { agendaBasicStructureWithTalkStub } from "../../../__stubs__/agenda";
import { TrackContentType } from "../../../../src/modules/agenda/domain/TrackContentType";

describe("Agenda Component", () => {
  it("Should show the agenda when there is agenda data", () => {
    const agendaData = [
      agendaBasicStructureWithTalkStub({
        type: TrackContentType.TALK,
        title: "Talk Title",
        description: "Speaker One, Speaker Two",
        link: undefined,
      }),
    ];
    const agendaRepositoryMock: AgendaRepository = {
      findAll: jest.fn(() => agendaData),
    };
    render(<AgendaContainer agendaRepository={agendaRepositoryMock} />);

    expect(screen.getByRole("table", {})).toHaveTextContent("00:00");
    expect(screen.getByRole("table", {})).toHaveTextContent("Talk Title");
    expect(screen.getByRole("table", {})).toHaveTextContent(
      "Speaker One, Speaker Two"
    );
  });
  it("Should show a message when there is not agenda data", () => {
    const agendaRepositoryMock: AgendaRepository = {
      findAll: jest.fn(() => [
        {
          venue: "",
          rows: [],
          date: "",
        },
      ]),
    };
    render(<AgendaContainer agendaRepository={agendaRepositoryMock} />);

    expect(screen.queryByRole("table", {})).not.toBeInTheDocument();
    expect(screen.getByRole("alert", {})).toHaveTextContent(
      "There is not agenda details yet"
    );
  });
});
