import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { SocialIcon } from "react-social-icons";
import { Speaker } from "../domain/Speaker";

export default ({
  speaker,
  className,
}: {
  speaker: Speaker;
  className?: string;
}) => (
  <div className={"row speaker-summary " + className}>
    <div className="image col-sm-2 col-12">
      <GatsbyImage
        alt={speaker.name}
        image={speaker.image?.childImageSharp?.gatsbyImageData}
      />
    </div>
    <div className="col-sm-10 col-12">
      <h4>{speaker.name}</h4>
      {speaker.title && <h5>{speaker.title}</h5>}
      <div className="social">
        {speaker.social?.twitter && (
          <SocialIcon
            url={`https://twitter.com/${speaker.social.twitter}`}
            network={"twitter"}
          />
        )}
        {speaker.social?.linkedin && (
          <SocialIcon
            url={`https://linkedin.com/in/${speaker.social.linkedin}`}
            network={"linkedin"}
          />
        )}
        {speaker.social?.github && (
          <SocialIcon
            url={`https://github.com/${speaker.social.github}`}
            network={"github"}
          />
        )}
      </div>
      <div dangerouslySetInnerHTML={{ __html: speaker.bio }} />
    </div>
  </div>
);
