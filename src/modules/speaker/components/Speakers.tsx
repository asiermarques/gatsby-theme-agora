import React from "react";
import { getSrc } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { SpeakerSummary } from "../domain/SpeakerSummary";

const Organizers = ({ speakers }: { speakers: SpeakerSummary[] }) => (
  <section id={"speakers"}>
    <div className={"container"}>
      <div className="row">
        {speakers.length &&
          speakers.map((speaker: SpeakerSummary) => (
            <div key={speaker.key} className="col-12 col-md-4">
              <Link to={`speakers/${speaker.key}`} className={"speaker-card"}>
                <div
                  className="image"
                  style={{ backgroundImage: `url("${getSrc(speaker.image)}")` }}
                />
                <div className="info">
                  <h4>{speaker.name}</h4>
                  {speaker.title}
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  </section>
);

export default Organizers;
