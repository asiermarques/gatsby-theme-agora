import { graphql, useStaticQuery } from "gatsby";
import OrganizerRepository from "../domain/OrganizerRepository";
import { Organizer } from "../domain/Organizer";

export class OrganizerGraphqlRepository implements OrganizerRepository {
  findAll(): Organizer[] {
    const data = useStaticQuery(graphql`
      query {
        allOrganizersYaml {
          nodes {
            name
            image {
              childImageSharp {
                gatsbyImageData(width: 400)
              }
            }
            link
          }
        }
      }
    `);

    return data.allOrganizersYaml.nodes.map((node) => node as Organizer);
  }
}
