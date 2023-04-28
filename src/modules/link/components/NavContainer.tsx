import React from "react";
import LinkRepository from "../domain/LinkRepository";
import { useLinkRepository } from "../../../hooks/use-repository";
import Nav from "./Nav";

export default ({ repository }: { repository?: LinkRepository }) => {
  const items = (repository ? repository : useLinkRepository()).findAll();
  return <Nav items={items} />;
};
