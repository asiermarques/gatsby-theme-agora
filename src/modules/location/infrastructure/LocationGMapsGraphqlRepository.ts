import { Location } from "../domain/Location";
import LocationRepository from "../domain/LocationRepository";
import { graphql, useStaticQuery } from "gatsby";

export default class LocationGMapsGraphqlRepository
  implements LocationRepository
{
  getConfiguredLocation(): Location {
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
    return {
      mapIframeUrl:
        data.site.siteMetadata.conferenceLocation?.googleMapsIframeLink,
      address: data.site.siteMetadata.conferenceLocation?.address,
    };
  }
}
