import { ConferenceInfo } from "./ConferenceInfo";
import { Summary } from "./Summary";
import { Location } from "../../location/domain/Location";

export type SiteInfo = {
  language: string;
  url: string;
  footerNotes?: string;
};

export type Config = {
  siteInfo: SiteInfo;
  conferenceInfo: ConferenceInfo;
  summary: Summary;
  location: Location;
};
