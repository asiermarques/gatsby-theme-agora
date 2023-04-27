export type AgendaSpeakerDTO = {
  key: string;
  name: string;
  internal: {
    content: string;
  };
};

export type AgendaTalkDTO = {
  key: string;
  title: string;
  speakers: string[];
  internal: {
    content: string;
  };
};

export type AgendaContentDTO = {
  slot: string;
  title: string;
  type: string;
  key: string;
  track: string;
  description?: string;
};

export type AgendaDTO = {
  content: AgendaContentDTO[];
  tracks: string[];
  slots: string[];
  venue: string;
  date: string;
};

export type AgendaCollectionDTO = {
  speakers: AgendaSpeakerDTO[];
  talks: AgendaTalkDTO[];
  agendas: AgendaDTO[];
};
