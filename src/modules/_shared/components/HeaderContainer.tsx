import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Header from "./Header";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          conferenceName
          conferenceDate
          conferenceClaim
          ticketsCTALink
          ticketsCTAText
        }
      }
    }
  `);
  return <Header conferenceName={data.site.siteMetadata.conferenceName} />;
};
