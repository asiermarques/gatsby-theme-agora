import * as React from "react";
import { Talk } from "../domain/Talk";

export default ({ talk }: { talk: Talk }) => (
  <article>
    <h1>{talk.title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: talk.description,
      }}
    />
  </article>
);
