import * as React from "react";
import nl2br from "react-nl2br";
import {graphql, useStaticQuery} from "gatsby";
import Location from "./Location";

export default () => {
    const data = useStaticQuery(graphql`
              query {
                site {
                  siteMetadata {
                    conferenceLocation {
                        googleMapsIframeLink
                        address
                    }
                  }
                }
              }
        `);

    return data?.site?.siteMetadata?.conferenceLocation
            && <Location address={nl2br(data.site.siteMetadata.conferenceLocation.address)}
                         iframeLink={data.site.siteMetadata.conferenceLocation.googleMapsIframeLink}/>
}