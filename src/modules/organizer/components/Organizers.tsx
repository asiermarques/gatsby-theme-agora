import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useStrings } from "../../../hooks/use-strings";
import { Organizer } from "../domain/Organizer";

const Organizers = ({ organizers }: { organizers: Organizer[] }) => {
  const strings = useStrings();
  return (
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
                {organizer.imageProcessed?.childImageSharp?.gatsbyImageData && (
                  <GatsbyImage
                    image={
                      organizer.imageProcessed?.childImageSharp
                        ?.gatsbyImageData as IGatsbyImageData
                    }
                    alt={organizer.name}
                    className="img-thumbnail"
                  />
                )}
              </a>
            </div>
          ))}
      </div>
    </>
  );
};

export default Organizers;
