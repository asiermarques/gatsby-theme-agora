import * as React from "react"
import {graphql, StaticQuery} from "gatsby";

export default ({bodyClassName, title, description }) => <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            conferenceDate
            conferenceHashtag
            conferenceName
          }
        }
      }
    `}
    render={(data) => (<>
        <html lang="en" />
        <body className={bodyClassName} />
        <title>{title?title:data.site.siteMetadata.conferenceName}</title>
        <meta name={"description"}
              content={description?description:data.site.siteMetadata.conferenceName + ", " + data.site.siteMetadata.conferenceDate}/>
        </>)}/>