import React from 'react';
import {graphql, StaticQuery} from "gatsby";
import HomeSummary from "./HomeSummary";

export default () => <StaticQuery
    query={graphql`
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
    `}
    render={(data) => (<HomeSummary summary={data.site.siteMetadata.summary}
                                    conferenceHashtag={data.site.siteMetadata.conferenceHashtag}/>)}/>