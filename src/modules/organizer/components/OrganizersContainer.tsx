import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Organizers from "./Organizers";

const OrganizersContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allOrganizersYaml {
          nodes {
            name
            image
            imageProcessed {
              childImageSharp {
                gatsbyImageData(width: 400)
              }
            }
            link
          }
        }
      }
    `}
    render={(data) => <Organizers organizers={data.allOrganizersYaml.nodes} />}
  />
);

export default OrganizersContainer;
