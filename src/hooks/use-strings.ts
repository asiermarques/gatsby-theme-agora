import strings from "../strings/all-strings";
import { graphql, useStaticQuery } from "gatsby";

export const DEFAULT_LANGUAGE = "en";

const getConfiguredLanguage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteLanguage
        }
      }
    }
  `);

  return data.site.siteMetadata.siteLanguage
    ? data.site.siteMetadata.siteLanguage
    : DEFAULT_LANGUAGE;
};

export const useStrings = () => {
  const language = getConfiguredLanguage();
  return strings[language];
};
