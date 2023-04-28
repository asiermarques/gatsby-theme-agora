import * as React from "react";
import Speakers from "./Speakers";
import SpeakerRepository from "../domain/SpeakerRepository";
import { useSpeakerRepository } from "../../../hooks/use-repository";

export default ({ repository }: { repository?: SpeakerRepository }) => {
  const items = (
    repository ? repository : useSpeakerRepository()
  ).findAllSummary();
  return <Speakers speakers={items} />;
};
