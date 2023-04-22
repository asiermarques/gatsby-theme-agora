import React from "react";
import {GatsbyImage, StaticImage, getSrc} from "gatsby-plugin-image";
import {Link} from "gatsby";

const Organizers = ({ speakers }) => (
  <section id={"speakers"}>
    <div className={"container"}>
        <div className="row">
            {speakers.length &&
                speakers.map((speaker, index) => (
                    <div key={index} className="col-6 col-md-4">
                        <Link to={`speakers/${speaker.key}`}
                              className={"speaker-card"}>
                            <div className="image"
                                 style={{backgroundImage: `url("${getSrc(speaker.image)}")`}}/>
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
