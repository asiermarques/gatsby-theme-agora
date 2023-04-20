import React from 'react';
import {graphql, StaticQuery} from "gatsby";
import HeaderHome from "./HeaderHome";

export default () => <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            conferenceName 
            conferenceDate
            conferenceClaim
          }
        }
      }
    `}
    render={(data) => (
        <HeaderHome
            conferenceName={data.site.siteMetadata.conferenceName}
            conferenceClaim={data.site.siteMetadata.conferenceClaim}
            conferenceDate={data.site.siteMetadata.conferenceDate}
        />)}/>