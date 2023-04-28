import React from "react";
import Organizers from "./Organizers";
import { useOrganizerRepository } from "../../../hooks/use-repository";
import OrganizerRepository from "../domain/OrganizerRepository";

export default ({ repository }: { repository?: OrganizerRepository }) => {
  const items = (repository ? repository : useOrganizerRepository()).findAll();
  return <Organizers organizers={items} />;
};
