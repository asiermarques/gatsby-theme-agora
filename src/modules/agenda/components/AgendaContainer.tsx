import * as React from "react"
import Agenda from "./Agenda";
import AgendaRepository from "../domain/AgendaRepository";
import {AgendaGraphqlRepository} from "../infrastructure/AgendaGraphqlRepository";

export default () => {
    const repository:AgendaRepository = new AgendaGraphqlRepository();
    return <Agenda agendaData={repository.findAll()}/>;
}