import React from "react";
import Markdown from "markdown-to-jsx";

export default ({ footerNotes }: { footerNotes?: string }) => {
  return (
    <>
      {footerNotes && (
        <p className={"footerNotes"}>
          <Markdown>{footerNotes}</Markdown>
        </p>
      )}
    </>
  );
};
