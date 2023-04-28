import { graphql, useStaticQuery } from "gatsby";
import SpeakerRepository from "../domain/SpeakerRepository";
import { SpeakerSummary } from "../domain/SpeakerSummary";

export class SpeakerGraphqlRepository implements SpeakerRepository {
  findAllSummary(): SpeakerSummary[] {
    const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark(
          filter: { fields: { collection: { eq: "speaker" } } }
          sort: { fileAbsolutePath: ASC }
        ) {
          nodes {
            frontmatter {
              name
              key
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
              title
            }
          }
        }
      }
    `);

    return data.allMarkdownRemark.nodes.map((node: any) => ({
      name: node.name,
      title: node.title,
      key: node.key,
      image: node.image,
    }));
  }
}
