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
            ticketsCTALink
            ticketsCTAText
          }
        }
      }
    `}
    render={(data) => (
        <HeaderHome
            conferenceClaim={data.site.siteMetadata.conferenceClaim}
            conferenceDate={data.site.siteMetadata.conferenceDate}
            cta={{link: data.site.siteMetadata.ticketsCTALink, text: data.site.siteMetadata.ticketsCTAText}}
        />)}/>