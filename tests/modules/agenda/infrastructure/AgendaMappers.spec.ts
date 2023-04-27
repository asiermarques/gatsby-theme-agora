import {AgendaCollectionDTO} from "../../../../src/modules/agenda/infrastructure/dto/AgendaDTO";
import {Agenda} from "../../../../src/modules/agenda/domain/Agenda";
import {mapAgendaInformation} from "../../../../src/modules/agenda/infrastructure/AgendaMappers";
import {
    AgendaContentTypeNotSupportedError,
    AgendaTalkNotExistsError
} from "../../../../src/modules/agenda/domain/AgendaErrors";
import {
    agendaBasicStructureStub,
    agendaCollectionDTOBasicStub,
    agendaCollectionDTOWithBadTalkConfigurationStub, agendaCollectionDTOWithBadTrackContentTypeConfigurationStub,
} from "../../../__stubs__/agenda";

describe("AgendaMappers", () => {
    it("Map agendaCollectionDTO to a domain Agenda collection", () => {
        const agendaCollectionDTOStub:AgendaCollectionDTO = agendaCollectionDTOBasicStub();
        const expected:Agenda[] = [agendaBasicStructureStub()];
        expect(mapAgendaInformation(agendaCollectionDTOStub)).toMatchObject(expected);
    });

    it("AgendaCollectionDTO throws an error if talk doesn't exists", () => {
        const agendaCollectionDTOStub:AgendaCollectionDTO = agendaCollectionDTOWithBadTalkConfigurationStub();

        expect(() => mapAgendaInformation(agendaCollectionDTOStub)).toThrow(AgendaTalkNotExistsError);
    });

    it("AgendaCollectionDTO throws an error if content type is not supported", () => {
        const agendaCollectionDTOStub:AgendaCollectionDTO = agendaCollectionDTOWithBadTrackContentTypeConfigurationStub();
        expect(() => mapAgendaInformation(agendaCollectionDTOStub)).toThrow(AgendaContentTypeNotSupportedError);
    });
});