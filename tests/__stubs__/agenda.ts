import { TrackContentType } from "../../src/modules/agenda/domain/TrackContentType";
import { speakerDTOStub } from "./speaker";
import { talkDTOStub } from "./talk";
import {
  AgendaCollectionDTO,
  AgendaDTO,
} from "../../src/modules/agenda/infrastructure/dto/AgendaDTO";
import { Agenda, TrackContent } from "../../src/modules/agenda/domain/Agenda";

export const agendaDTOStub = (): AgendaDTO => ({
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
      title: "Test",
    },
  ],
});

export const emptyAgendaCollectionDTOStub: AgendaCollectionDTO = {
  speakers: [],
  talks: [],
  agendas: [],
};

export const agendaCollectionDTOStubWithAnAgendaWithoutContent: AgendaCollectionDTO =
  {
    speakers: [],
    talks: [],
    agendas: [
      {
        venue: "",
        slots: [],
        date: "",
        tracks: [],
        content: [],
      },
    ],
  };

export const agendaCollectionDTOBasicStub = (): AgendaCollectionDTO => {
  return {
    speakers: [speakerDTOStub()],
    talks: [talkDTOStub()],
    agendas: [agendaDTOStub()],
  };
};

export const agendaCollectionDTOWithBadTalkConfigurationStub =
  (): AgendaCollectionDTO => {
    const dto = agendaCollectionDTOBasicStub();
    dto.agendas[0].content[0].key = "invalid_talk_key";
    return dto;
  };

export const agendaCollectionDTOWithBadTrackContentTypeConfigurationStub =
  (): AgendaCollectionDTO => {
    const dto = agendaCollectionDTOBasicStub();
    dto.agendas[0].content[0].type = "invalid_content_type";
    return dto;
  };

export const agendaBasicStructureStub = (): Agenda => ({
  venue: "Test",
  date: "00/00/00",
  rows: [
    {
      slot: "00:00",
      trackContents: [
        {
          type: TrackContentType.TALK,
          link: "/talks/talk",
          description: "Speaker Name",
          title: "Test Talk",
        },
      ],
    },
  ],
});

export const agendaBasicStructureWithTalkStub = (
  talk: TrackContent
): Agenda => ({
  venue: "Test",
  date: "00/00/00",
  rows: [
    {
      slot: "00:00",
      trackContents: [
        {
          type: TrackContentType.TALK,
          link: "/talks/talk",
          description: "Speaker Name",
          title: "Test Talk",
        },
        talk,
      ],
    },
  ],
});
