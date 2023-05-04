import * as React from "react";
import PageHead from "./PageHead";
import { useConfig } from "../../../hooks/use-config";
import { getSrc } from "gatsby-plugin-image";

export default ({
  bodyClassName,
  title,
  description,
}: {
  bodyClassName: string;
  title?: string;
  description?: string;
}) => {
  const config = useConfig();
  const titleHtml = title
    ? title + " | " + config.conferenceInfo.name
    : config.conferenceInfo.name;
  const descriptionHtml = description
    ? description
    : config.conferenceInfo.claim + ", " + config.conferenceInfo.dateDetails;
  const ogImage = getSrc(
    config.conferenceInfo.shareImage?.childImageSharp?.gatsbyImageData
  );
  return (
    <PageHead
      title={titleHtml}
      description={descriptionHtml}
      ogImage={ogImage}
      bodyClassName={bodyClassName}
    />
  );
};
