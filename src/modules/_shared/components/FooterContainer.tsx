import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Footer from "./Footer";

export default () => {
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
  return <Footer links={data.allLinksYaml.nodes} />;
};
