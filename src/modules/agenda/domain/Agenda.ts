import { TrackContentType } from "./TrackContentType";

export type TrackContent = {
  type: TrackContentType;
  title: string;
  description?: string;
  link?: string;
};

export type AgendaRow = {
  slot: string;
  trackContents: TrackContent[];
};

export type Agenda = {
  venue: string;
  date: string;
  rows: AgendaRow[];
};
