import { SpeakerSummary } from "./SpeakerSummary";

export default interface SpeakerRepository {
  findAllSummary: () => SpeakerSummary[];
}
