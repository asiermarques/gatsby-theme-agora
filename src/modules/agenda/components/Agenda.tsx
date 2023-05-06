import React from "react";
import { Agenda } from "../domain/Agenda";
import AgendaContentBlock from "./AgendaContentBlock";

export default ({ agendaData }: { agendaData: Agenda[] }) => (
  <section id={"agenda"}>
    <div className="container">
      <h2>Agenda</h2>
      {agendaData.map((agenda: Agenda, agendaIndex: number) => (
        <AgendaContentBlock
          key={agendaIndex}
          agenda={agenda}
          showDetails={agendaData.length > 1}
        />
      ))}
    </div>
  </section>
);
