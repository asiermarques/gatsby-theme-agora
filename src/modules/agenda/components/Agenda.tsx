import React from "react";
import {Link} from "gatsby";
import {TYPE_TALK} from "../domain/TrackContentType";

export default ({agendaData}) => <section id={"agenda"}>
    <div className="container">
        <h2>Agenda</h2>
        {agendaData.map((data, agendaIndex) =>
        <table key={agendaIndex} className="table table-striped">
            <tbody>
            {data.rows.map((row, trIndex) => <tr key={`${agendaIndex}-${trIndex}`} className={"agenda_row"}>
                <th scope="row">{row.slot}</th>
                {row.trackContents.map((content, tdIndex) => <td key={`${agendaIndex}-${trIndex}td${tdIndex}`}>
                    {content.type === TYPE_TALK ? <><Link to={content.link} title={content.title}>{content.title}</Link>
                            <span className={"description"}>{content.description}</span></>
                        : <><span>{content.title}</span><span className={"description"}>{content.description}</span></>}
                </td>)}
            </tr>)}
            </tbody>
        </table>)}
    </div>
</section>