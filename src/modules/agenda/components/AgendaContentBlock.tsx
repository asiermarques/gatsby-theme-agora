import React from "react";
import { Link } from "gatsby";
import { TrackContentType } from "../domain/TrackContentType";
import { Agenda, AgendaRow } from "../domain/Agenda";

export default ({
  agenda,
  showDetails,
}: {
  agenda: Agenda;
  showDetails?: boolean;
}) => (
  <article>
    {agenda.rows.length === 0 && (
      <div className="alert alert-info" role={"alert"}>
        There is not agenda details yet
      </div>
    )}
    {showDetails && (
      <div className={"agendaBlockDetails"}>
        <h4>{agenda.date}</h4>
        <p>{agenda.venue}</p>
      </div>
    )}
    {agenda.rows.length > 0 && (
      <table role={"table"} className="table table-striped">
        <tbody>
          {agenda.rows.map((row: AgendaRow, trIndex: number) => (
            <tr key={`${trIndex}`} className={"agenda_row"}>
              <th scope="row">{row.slot}</th>
              {row.trackContents.map((content, tdIndex) => (
                <td key={`${trIndex}td${tdIndex}`}>
                  {content.type === TrackContentType.TALK ? (
                    <>
                      <Link to={content.link as string} title={content.title}>
                        {content.title}
                      </Link>
                      <span className={"description"}>
                        {content.description}
                      </span>
                    </>
                  ) : (
                    <>
                      <span>{content.title}</span>
                      <span className={"description"}>
                        {content.description}
                      </span>
                    </>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </article>
);
