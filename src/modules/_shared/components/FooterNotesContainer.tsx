import React from "react";
import { useConfig } from "../../../hooks/use-config";
import FooterNotes from "./FooterNotes";

export default () => {
  const config = useConfig();
  return <FooterNotes footerNotes={config.siteInfo?.footerNotes} />;
};
