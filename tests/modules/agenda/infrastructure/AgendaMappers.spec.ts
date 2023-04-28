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
  emptyAgendaCollectionDTOStub,
} from "../../../__stubs__/agenda";

describe("AgendaMappers mapAgendaInformation when we have a green path", () => {
  it("map agendaCollectionDTO to a domain Agenda collection when all the data is configured correctly", () => {
    const agendaCollectionDTOStub: AgendaCollectionDTO =
      agendaCollectionDTOBasicStub();
    const expected: Agenda[] = [agendaBasicStructureStub()];

    expect(mapAgendaInformation(agendaCollectionDTOStub)).toMatchObject(
      expected
    );
  });
});

describe("AgendaMappers mapAgendaInformation when we have incorrect configurations", () => {
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

describe("AgendaMappers mapAgendaInformation when there is no data", () => {
  it("and map agendaCollectionDTO to a domain Agenda collection when there is no data", () => {
    expect(mapAgendaInformation(emptyAgendaCollectionDTOStub)).toMatchObject(
      []
    );
  });

  it("and map agendaCollectionDTO to a domain Agenda when there is not content in a configured agenda", () => {
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
});
