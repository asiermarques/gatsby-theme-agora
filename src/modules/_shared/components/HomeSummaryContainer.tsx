import React from "react";
import nl2br from "react-nl2br";
import { graphql, useStaticQuery } from "gatsby";
import HomeSummary from "./HomeSummary";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          summary {
            ctaLink
            ctaText
            description
          }
          conferenceHashtag
        }
      }
    }
  `);
  return (
    <HomeSummary
      summary={nl2br(data.site.siteMetadata.summary)}
      conferenceHashtag={data.site.siteMetadata.conferenceHashtag}
    />
  );
};
