import React from "react";
import nl2br from "react-nl2br";
import HomeSummary from "./HomeSummary";
import { useConfig } from "../../../hooks/use-config";

export default () => {
  const config = useConfig();
  return (
    <HomeSummary
      summary={nl2br(config.summary)}
      conferenceHashtag={config.conferenceInfo.hashTage}
    />
  );
};
