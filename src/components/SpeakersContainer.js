import * as React from "react"
import {graphql, useStaticQuery} from "gatsby";
import Speakers from "./Speakers";

export default () => {
    const data = useStaticQuery(graphql`
          query {
            allMarkdownRemark(filter: {fields: {collection: {eq: "speaker"}}}, sort: {fileAbsolutePath: ASC}){
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
    return <Speakers speakers={data.allMarkdownRemark.nodes.map(node => node.frontmatter)}/>;
}