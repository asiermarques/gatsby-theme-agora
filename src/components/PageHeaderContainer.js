import * as React from "react"
import {graphql, useStaticQuery} from "gatsby";
import PageHead from "./PageHead";

export default ({bodyClassName, title, description}) => {
    const data = useStaticQuery(graphql`
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
        `);
    const titleHtml = title ? title : data.site.siteMetadata.conferenceName;
    const descriptionHtml = description ? description
        : data.site.siteMetadata.conferenceClaim + ", " + data.site.siteMetadata.conferenceDate;
    const ogImage = data.site.siteMetadata.bannerImage;
    return <PageHead title={titleHtml}
                     description={descriptionHtml}
                     ogImage={ogImage}
                     bodyClassName={bodyClassName}/>;
}