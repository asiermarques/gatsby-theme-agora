import * as React from "react"
import {graphql, StaticQuery} from "gatsby";
import { getSrc } from "gatsby-plugin-image";

export default ({bodyClassName, title, description, ogImage }) => <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            conferenceDate
            conferenceHashtag
            conferenceName
            conferenceClaim
            bannerImage
          }
        }
      }
    `}
    render={(data) => {
        const titleHtml = title?title:data.site.siteMetadata.conferenceName;
        const descriptionHtml = description?description:data.site.siteMetadata.conferenceClaim + ", " + data.site.siteMetadata.conferenceDate;
        const ogImage = data.site.siteMetadata.bannerImage;
        return <>
            <html lang="en" />
            <body className={bodyClassName} />
            <title>{titleHtml}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name={"description"} content={descriptionHtml}/>
            <meta property="og:title" content={titleHtml} />
            <meta property="og:description" content={descriptionHtml} />
            <meta property="og:image" content={ogImage} />
        </>
    }}/>