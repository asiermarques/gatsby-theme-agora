import * as React from "react"
import {graphql, useStaticQuery} from "gatsby";
import {mapAgendaInformation} from "../lib/agendaMappers";
import Agenda from "./Agenda";

export default () => {
    const data = useStaticQuery(graphql`
    {
      speakers:allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(content/speakers)/"}}) {
        nodes {
          frontmatter {
            name
            key
          }
          internal {
            content
          }
        }
      }
      talks:allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(content/talks)/"}}) {
        nodes {
          frontmatter {
            speakers
            key
            title
          }
          internal {
            content
          }
        }
      }
      agenda:allAgendaYaml {
        nodes {
          content {
            slot
            title
            type
            key
            track
            description
          }
          tracks
          slots
          venue
          date
        }
      }
    }`);
    return <Agenda agendaData={mapAgendaInformation(data)}/>;
}