import strings from "../strings/all-strings";

export const DEFAULT_LANGUAGE = "en";

export default function useStrings(language) {
  return strings[language] ? strings[language] : strings[DEFAULT_LANGUAGE];
}
