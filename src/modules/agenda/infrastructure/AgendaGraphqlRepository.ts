import AgendaRepository from "../domain/AgendaRepository";
import { graphql, useStaticQuery } from "gatsby";
import { mapAgendaInformation } from "./AgendaMappers";
import { Agenda } from "../domain/Agenda";
import { AgendaCollectionDTO } from "./dto/AgendaDTO";

export class AgendaGraphqlRepository implements AgendaRepository {
  findAll(): Agenda[] | Error {
    const data = useStaticQuery(graphql`
      {
        speakers: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(content/speakers)/" } }
        ) {
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
        talks: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(content/talks)/" } }
        ) {
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
        agenda: allAgendaYaml {
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
      }
    `);

    const agendaCollectionDTO: AgendaCollectionDTO = {
      speakers: data.speakers.nodes.map((node: any) => ({
        internal: node.internal,
        ...node.frontmatter,
      })),
      talks: data.talks.nodes.map((node: any) => ({
        internal: node.internal,
        ...node.frontmatter,
      })),
      agendas: data.agenda.nodes,
    };

    return mapAgendaInformation(agendaCollectionDTO);
  }
}

export const createRepository = () => new AgendaGraphqlRepository();
