import React from "react";
import { useConfig } from "../../../hooks/use-config";
import Markdown from "markdown-to-jsx";

export default () => {
  const config = useConfig();
  return (
    <>
      {config.siteInfo.footerNotes && (
        <p className={"footerNotes"}>
          <Markdown>{config.siteInfo.footerNotes}</Markdown>
        </p>
      )}
    </>
  );
};
