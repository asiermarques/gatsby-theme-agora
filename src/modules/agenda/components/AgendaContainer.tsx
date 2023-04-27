import * as React from "react";
import Agenda from "./Agenda";
import AgendaRepository from "../domain/AgendaRepository";
import { AgendaGraphqlRepository } from "../infrastructure/AgendaGraphqlRepository";

export default ({
  agendaRepository,
}: {
  agendaRepository: AgendaRepository | undefined;
}) => {
  const repository: AgendaRepository = agendaRepository
    ? agendaRepository
    : new AgendaGraphqlRepository();
  return <Agenda agendaData={repository.findAll()} />;
};
