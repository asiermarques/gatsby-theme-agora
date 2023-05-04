import { graphql, useStaticQuery } from "gatsby";
import { Config } from "../modules/_shared/domain/Config";

export const useConfig = (): Config => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteInfo {
            language
            url
            footerNotes
          }
          conferenceInfo {
            hashTag
            date
            name
            claim
          }
          summary {
            cta {
              text
              link
            }
            description
          }
          location {
            venueInformation
            mapIframeUrl
          }
        }
      }
      allConfigYaml(limit: 1) {
        nodes {
          siteInfo {
            language
            url
            footerNotes
          }
          conferenceInfo {
            hashTag
            date
            name
            claim
            ticketsCta {
              text
              link
            }
            logoImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            shareImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          summary {
            cta {
              text
              link
            }
            description
          }
          location {
            venueInformation
            mapIframeUrl
          }
        }
      }
    }
  `);
  const defaultConfigData = data.site.siteMetadata;
  const configData = data.allConfigYaml.nodes.pop();
  return Object.assign(defaultConfigData, configData) as Config;
};
