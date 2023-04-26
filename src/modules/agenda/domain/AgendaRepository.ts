import {Agenda} from "./Agenda";

export default interface AgendaRepository {
    findAll: () => Agenda[] | Error
}