import { TrackContentType } from "../domain/TrackContentType";
import {
  AgendaCollectionDTO,
  AgendaContentDTO,
  AgendaSpeakerDTO,
  AgendaTalkDTO,
} from "./dto/AgendaDTO";
import { Agenda, TrackContent } from "../domain/Agenda";
import {
  AgendaContentTypeNotSupportedError,
  AgendaTalkNotExistsError,
} from "../domain/AgendaErrors";

export type TrackContentMapper = (
  content: AgendaContentDTO
) => TrackContent | null;

const TalkTrackContentMapper =
  (talks: AgendaTalkDTO[], speakers: AgendaSpeakerDTO[]): TrackContentMapper =>
  (content: AgendaContentDTO): TrackContent | null => {
    if (content.type !== TrackContentType.TALK) {
      return null;
    }
    const talk = talks
      .map((node) => ({
        speakers: node.speakers.map((key) =>
          speakers.filter((speaker) => speaker.key === key).pop()
        ),
        title: node.title,
        key: node.key,
        link: `/talks/${node.key}`,
        description: node.internal.content,
      }))
      .filter((talk) => talk.key === content.key)
      .pop();
    if (!talk)
      throw new AgendaTalkNotExistsError(
        `The configured talk key ${content.key} in the agenda content slot ${
          content.slot
        } doesn't exists. Possible talk keys ${JSON.stringify(
          talks.map((talk) => talk.key)
        )}`
      );
    return {
      type: TrackContentType.TALK,
      link: talk.link,
      title: talk.title,
      description: talk.speakers
        .filter(
          (
            speaker: AgendaSpeakerDTO | undefined
          ): speaker is AgendaSpeakerDTO => !!speaker
        )
        .reduce(
          (acc: string, current: AgendaSpeakerDTO) =>
            `${acc ? acc + ", " : ""}${current.name}`,
          ""
        ),
    };
  };

const BlockTrackContentMapper: TrackContentMapper = (
  content: AgendaContentDTO
): TrackContent | null => {
  if (content.type !== TrackContentType.BLOCK) return null;
  return {
    type: TrackContentType.BLOCK,
    link: undefined,
    title: content.title,
    description: content.description,
  };
};

const mapTrackContentFromContent = (
  content: AgendaContentDTO,
  talksDTOs: AgendaTalkDTO[],
  speakers: AgendaSpeakerDTO[]
): TrackContent => {
  let result: TrackContent | null = null;
  for (let mapper of [
    TalkTrackContentMapper(talksDTOs, speakers),
    BlockTrackContentMapper,
  ]) {
    if ((result = mapper(content))) break;
  }

  if (!result)
    throw new AgendaContentTypeNotSupportedError(
      `Content with type ${content.type} is not valid or can not be assigned to the agenda`
    );

  return result;
};

export const mapAgendaInformation = (data: AgendaCollectionDTO): Agenda[] =>
  data.agendas.map((node) => {
    return {
      date: node.date,
      venue: node.venue,
      rows: node.slots.map((slot) => {
        return {
          slot: slot,
          trackContents: node.tracks
            .map((track) =>
              node.content
                .filter(
                  (content) => content.track === track && content.slot === slot
                )
                .map((content) =>
                  mapTrackContentFromContent(content, data.talks, data.speakers)
                )
                .pop()
            )
            .filter((item): item is TrackContent => !!item),
        };
      }),
    };
  });
