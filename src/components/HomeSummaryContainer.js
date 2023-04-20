import React from 'react';
import nl2br from "react-nl2br";
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
    render={(data) => (<HomeSummary summary={nl2br(data.site.siteMetadata.summary)}
                                    conferenceHashtag={data.site.siteMetadata.conferenceHashtag}/>)}/>