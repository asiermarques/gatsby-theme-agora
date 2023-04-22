import {TYPE_TALK} from "./agendaConsts";

export const mapAgendaInformation = (data) => {
    const speakers = data.speakers.nodes.map(node => node.frontmatter);
    const talks = data.talks.nodes.map(node => {
        return {
            speakers: node.frontmatter.speakers.map(key =>
                speakers.filter(speaker => speaker.key === key).pop()),
            title: node.frontmatter.title,
            key: node.frontmatter.key,
            link: `/talks/${node.frontmatter.key}`,
            description: node.internal.content
        }
    });

    return data.agenda.nodes.map(node => {
        return {
            date: node.date,
            venue: node.venue,
            rows: node.slots.map(slot => {
                return {
                    slot: slot,
                    trackContents: node.tracks.map(track =>
                        node.content
                            .filter(content => content.track === track && content.slot === slot)
                            .map(content => {
                                const result = {
                                    type: content.type,
                                    link: null,
                                    title: content.title,
                                    description: content.description
                                }
                                if(content.type === TYPE_TALK) {
                                    const talk = talks.filter(talk => talk.key === content.key).pop();
                                    if(!talk)
                                        throw Error(`The configured talk key ${content.key} in the agenda content slot ${content.slot} doesn't exists. Possible talk keys ${JSON.stringify(talks.map(talk => talk.key))}`);
                                    result.title = talk.title;
                                    result.link = talk.link;
                                    result.description = talk.speakers.reduce((acc, current) => `${acc? acc + ", " : ""}${current.name}` , "")
                                }
                                return result;
                            }).pop()
                    )
                }
            })
        }
    });
}