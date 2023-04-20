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
            conferenceClaim
          }
        }
      }
    `}
    render={(data) => (<>
        <html lang="en" />
        <body className={bodyClassName} />
        <title>{title?title:data.site.siteMetadata.conferenceName}</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
        <meta name={"description"}
              content={description?description:data.site.siteMetadata.conferenceClaim + ", " + data.site.siteMetadata.conferenceDate}/>
        </>)}/>