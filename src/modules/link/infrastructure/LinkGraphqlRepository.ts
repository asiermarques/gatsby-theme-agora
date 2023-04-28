import { graphql, useStaticQuery } from "gatsby";
import LinkRepository from "../domain/LinkRepository";
import { Link } from "../domain/Link";

export class LinkGraphqlRepository implements LinkRepository {
  findAll(): Link[] {
    const data = useStaticQuery(graphql`
      query {
        allLinksYaml {
          nodes {
            name
            link
          }
        }
      }
    `);

    return data.allLinksYaml.nodes.map((node) => node as Link);
  }
}
