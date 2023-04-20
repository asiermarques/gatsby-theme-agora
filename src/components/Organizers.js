import React from "react";
import { StaticImage} from "gatsby-plugin-image";
import useStrings from "../hooks/use-strings";

const strings = useStrings('es');
const Organizers = ({ organizers }) => (
  <>
    <h4>{strings.organizers_title}</h4>
    <div className="row justify-content-start">
      {organizers.length &&
        organizers.map((organizer, index) => (
          <div key={index} className="col-6 col-md-3 organizer">
            <a
              href={organizer.link}
              title={organizer.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={organizer.image}
                alt={organizer.name}
                className="img-thumbnail"
              />
            </a>
          </div>
        ))}
    </div>
  </>
);

export default Organizers;
