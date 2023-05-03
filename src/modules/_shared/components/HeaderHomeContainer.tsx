import React from "react";
import HeaderHome from "./HeaderHome";
import { useConfig } from "../../../hooks/use-config";

export default () => {
  const config = useConfig();
  return (
    <HeaderHome
      conferenceName={config.conferenceInfo.name}
      conferenceClaim={config.conferenceInfo.claim}
      conferenceDate={config.conferenceInfo.dateDetails}
      cta={config.conferenceInfo.ticketsCta}
    />
  );
};
