import { Speaker } from "../../src/modules/speaker/domain/Speaker";
import { AgendaSpeakerDTO } from "../../src/modules/agenda/infrastructure/dto/AgendaDTO";

export const speakerDTOStub = (): AgendaSpeakerDTO => ({
  key: "speaker",
  name: "Speaker Name",
  internal: { content: "Test" },
});

export const speakerStub = (): Speaker => ({
  key: "speaker",
  name: "Speaker Name",
  title: "Speaker company role",
  image: undefined,
  bio: "Test",
  social: {
    twitter: "test",
    linkedin: "test",
    github: "test",
  },
});
