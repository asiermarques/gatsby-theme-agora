import LocationRepository from "../modules/location/domain/LocationRepository";
import LocationGMapsGraphqlRepository from "../modules/location/infrastructure/LocationGMapsGraphqlRepository";
import AgendaRepository from "../modules/agenda/domain/AgendaRepository";
import { AgendaGraphqlRepository } from "../modules/agenda/infrastructure/AgendaGraphqlRepository";
import SpeakerRepository from "../modules/speaker/domain/SpeakerRepository";
import { SpeakerGraphqlRepository } from "../modules/speaker/infrastructure/SpeakerGraphqlRepository";
import OrganizerRepository from "../modules/organizer/domain/OrganizerRepository";
import { OrganizerGraphqlRepository } from "../modules/organizer/infrastructure/OrganizerGraphqlRepository";
import LinkRepository from "../modules/link/domain/LinkRepository";
import { LinkGraphqlRepository } from "../modules/link/infrastructure/LinkGraphqlRepository";

export const useLocationRepository = (): LocationRepository =>
  new LocationGMapsGraphqlRepository();

export const useAgendaRepository = (): AgendaRepository =>
  new AgendaGraphqlRepository();

export const useSpeakerRepository = (): SpeakerRepository =>
  new SpeakerGraphqlRepository();

export const useOrganizerRepository = (): OrganizerRepository =>
  new OrganizerGraphqlRepository();

export const useLinkRepository = (): LinkRepository =>
  new LinkGraphqlRepository();
