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
          }
        }
      }
    `}
    render={(data) => (
        <HeaderHome
            conferenceName={data.site.siteMetadata.conferenceName}
            conferenceDate={data.site.siteMetadata.conferenceDate}
        />)}/>