import strings from "../strings/all-strings"

export default function useStrings(language) {
    return strings[language] ? strings[language] : strings["en"];
}