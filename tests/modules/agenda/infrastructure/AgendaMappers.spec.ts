import {AgendaCollectionDTO} from "../../../../src/modules/agenda/infrastructure/dto/AgendaDTO";
import {TrackContentType} from "../../../../src/modules/agenda/domain/TrackContentType";
import {Agenda} from "../../../../src/modules/agenda/domain/Agenda";
import {mapAgendaInformation} from "../../../../src/modules/agenda/infrastructure/AgendaMappers";
import {
    AgendaContentTypeNotSupportedError,
    AgendaTalkNotExistsError
} from "../../../../src/modules/agenda/domain/AgendaErrors";

describe("AgendaMappers", () => {
    it("Map agendaCollectionDTO to a domain Agenda collection", () => {
        const agendaCollectionDTOStub:AgendaCollectionDTO = {
            speakers: [
                {
                    key: "speaker",
                    name: "Test Foo",
                    internal: {content: "Test"}
                }
            ],
            talks: [
                {
                    key: "talk",
                    speakers: ["speaker"],
                    title: "Test Talk",
                    internal: {content: "Test"}
                }
            ],
            agendas: [{
                venue: "Test",
                date: "00/00/00",
                slots: ["00:00"],
                tracks: ["0"],
                content: [
                    {
                        slot: "00:00",
                        track: "0",
                        key: "talk",
                        type: TrackContentType.TALK,
                        description: "",
                        title: "Test"
                    }
                ]
            }]
        };
        const expected:Agenda[] = [{
            venue: "Test",
            date: "00/00/00",
            rows: [{
                slot: "00:00",
                trackContents: [{
                    type: TrackContentType.TALK,
                    link: '/talks/talk',
                    description: "Test Foo",
                    title: "Test Talk"
                }]
            }]
        }];
        expect(mapAgendaInformation(agendaCollectionDTOStub)).toMatchObject(expected);
    });

    it("AgendaCollectionDTO throws an error if talk doesn't exists", () => {
        const agendaCollectionDTOStub:AgendaCollectionDTO = {
            speakers: [
                {
                    key: "speaker",
                    name: "Test Foo",
                    internal: {content: "Test"}
                }
            ],
            talks: [
                {
                    key: "talk",
                    speakers: ["speaker"],
                    title: "Test Talk",
                    internal: {content: "Test"}
                }
            ],
            agendas: [{
                venue: "Test",
                date: "00/00/00",
                slots: ["00:00"],
                tracks: ["0"],
                content: [
                    {
                        slot: "00:00",
                        track: "0",
                        key: "test",
                        type: TrackContentType.TALK,
                        description: "",
                        title: "Test"
                    }
                ]
            }]
        };

        expect(() => mapAgendaInformation(agendaCollectionDTOStub)).toThrow(AgendaTalkNotExistsError);
    });

    it("AgendaCollectionDTO throws an error if content type is not supported", () => {
        const agendaCollectionDTOStub:AgendaCollectionDTO = {
            speakers: [
                {
                    key: "speaker",
                    name: "Test Foo",
                    internal: {content: "Test"}
                }
            ],
            talks: [
                {
                    key: "talk",
                    speakers: ["speaker"],
                    title: "Test Talk",
                    internal: {content: "Test"}
                }
            ],
            agendas: [{
                venue: "Test",
                date: "00/00/00",
                slots: ["00:00"],
                tracks: ["0"],
                content: [
                    {
                        slot: "00:00",
                        track: "0",
                        key: "talk",
                        type: "test",
                        description: "",
                        title: "Test"
                    }
                ]
            }]
        };
        expect(() => mapAgendaInformation(agendaCollectionDTOStub)).toThrow(AgendaContentTypeNotSupportedError);
    });
});