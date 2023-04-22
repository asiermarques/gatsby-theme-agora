import React from 'react';
import {graphql, StaticQuery} from "gatsby";
import Header from "./Header";

export default () => <StaticQuery
    query={graphql`
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
    `}
    render={(data) => (
        <Header
            conferenceName={data.site.siteMetadata.conferenceName}
        />)}/>