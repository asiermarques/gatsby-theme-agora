import { AgendaCollectionDTO } from "../../../../src/modules/agenda/infrastructure/dto/AgendaDTO";
import { Agenda } from "../../../../src/modules/agenda/domain/Agenda";
import { mapAgendaInformation } from "../../../../src/modules/agenda/infrastructure/AgendaMappers";
import {
  AgendaContentTypeNotSupportedError,
  AgendaTalkNotExistsError,
} from "../../../../src/modules/agenda/domain/AgendaErrors";
import {
  agendaBasicStructureStub,
  agendaCollectionDTOBasicStub,
  agendaCollectionDTOStubWithAnAgendaWithoutContent,
  agendaCollectionDTOWithBadTalkConfigurationStub,
  agendaCollectionDTOWithBadTrackContentTypeConfigurationStub,
  agendaDTOStub,
  emptyAgendaCollectionDTOStub,
} from "../../../__stubs__/agenda";
import { speakerDTOStub } from "../../../__stubs__/speaker";
import { talkDTOStub } from "../../../__stubs__/talk";

describe("AgendaMappers", () => {
  it("Map agendaCollectionDTO to a domain Agenda collection when all the data is configured correctly", () => {
    const agendaCollectionDTOStub: AgendaCollectionDTO =
      agendaCollectionDTOBasicStub();
    const expected: Agenda[] = [agendaBasicStructureStub()];
    expect(mapAgendaInformation(agendaCollectionDTOStub)).toMatchObject(
      expected
    );
  });

  it("Map agendaCollectionDTO to a domain Agenda collection when there is no data", () => {
    expect(mapAgendaInformation(emptyAgendaCollectionDTOStub)).toMatchObject(
      []
    );

    expect(
      mapAgendaInformation(agendaCollectionDTOStubWithAnAgendaWithoutContent)
    ).toMatchObject([
      {
        venue: "",
        rows: [],
        date: "",
      },
    ]);
  });

  it("AgendaCollectionDTO throws an error if talk doesn't exists", () => {
    const agendaCollectionDTOStub: AgendaCollectionDTO =
      agendaCollectionDTOWithBadTalkConfigurationStub();

    expect(() => mapAgendaInformation(agendaCollectionDTOStub)).toThrow(
      AgendaTalkNotExistsError
    );
  });

  it("AgendaCollectionDTO throws an error if content type is not supported", () => {
    const agendaCollectionDTOStub: AgendaCollectionDTO =
      agendaCollectionDTOWithBadTrackContentTypeConfigurationStub();
    expect(() => mapAgendaInformation(agendaCollectionDTOStub)).toThrow(
      AgendaContentTypeNotSupportedError
    );
  });
});
