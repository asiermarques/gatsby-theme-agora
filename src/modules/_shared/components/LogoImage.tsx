import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useConfig } from "../../../hooks/use-config";

export default () => {
  const config = useConfig();
  return (
    <GatsbyImage
      alt={config.conferenceInfo.name}
      image={config.conferenceInfo.logoImage?.childImageSharp?.gatsbyImageData}
    />
  );
};
