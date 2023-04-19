import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Footer from "./Footer";

const FooterContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allLinksYaml {
          nodes {
            name
            link
          }
        }
      }
    `}
    render={(data) => (
      <Footer
        links={data.allLinksYaml.nodes}
      />
    )}
  />
);

export default FooterContainer;
