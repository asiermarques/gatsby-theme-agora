import React from "react";
import Header from "./Header";
import { useConfig } from "../../../hooks/use-config";

export default () => {
  const config = useConfig();
  return <Header conferenceName={config.conferenceInfo.name} />;
};
