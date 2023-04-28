import { Organizer } from "./Organizer";

export default interface OrganizerRepository {
  findAll: () => Organizer[];
}
