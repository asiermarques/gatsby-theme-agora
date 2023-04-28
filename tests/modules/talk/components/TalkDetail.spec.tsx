import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AgendaTalkDTO } from "../../../../src/modules/agenda/infrastructure/dto/AgendaDTO";
import { talkDTOStub } from "../../../__stubs__/talk";
import TalkDetail from "../../../../src/modules/talk/components/TalkDetail";

describe("TalkDetail component", () => {
  it("Should show the talk details", () => {
    const talk: AgendaTalkDTO = talkDTOStub();
    render(
      <TalkDetail
        talk={{
          title: talk.title,
          description: talk.internal.content,
        }}
      />
    );
    expect(screen.getByRole("heading", {})).toHaveTextContent(talk.title);
  });
});
