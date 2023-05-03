import strings from "../strings/all-strings";
import { graphql, useStaticQuery } from "gatsby";
import { useConfig } from "./use-config";

export const DEFAULT_LANGUAGE = "en";

const getConfiguredLanguage = () => {
  const config = useConfig();

  return config.siteInfo.language ? config.siteInfo.language : DEFAULT_LANGUAGE;
};

export const useStrings = () => {
  const language = getConfiguredLanguage();
  return strings[language];
};
