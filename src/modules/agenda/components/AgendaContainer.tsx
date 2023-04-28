import * as React from "react";
import Agenda from "./Agenda";
import AgendaRepository from "../domain/AgendaRepository";
import { useAgendaRepository } from "../../../hooks/use-repository";

export default ({
  agendaRepository,
}: {
  agendaRepository?: AgendaRepository;
}) => {
  const repository: AgendaRepository = agendaRepository
    ? agendaRepository
    : useAgendaRepository();
  return <Agenda agendaData={repository.findAll()} />;
};
