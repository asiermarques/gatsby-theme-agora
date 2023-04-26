

exports.createTalkPages = async ({ graphql, createPage, reporter }) => {
    const talksResult = await graphql(`{
      speakers:allMarkdownRemark(filter: {fields: {collection: {eq: "speaker"}}}) {
        nodes {
          frontmatter {
            name
            key
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            social {
                  github
                  linkedin
                  twitter
                }
            title
          }
          html
        }
      }
      talks:allMarkdownRemark(filter: {fields: {collection: {eq: "talk"}}}) {
        nodes {
          fileAbsolutePath
          frontmatter {
            speakers
            key
            title
          }
          html
        }
      }
    }`);
    if (talksResult.errors) {
        reporter.panicOnBuild(`Error while running Talks GraphQL query.`)
        return
    }

    const talkTemplate = require.resolve(`./src/modules/talk/templates/talk.tsx`);
    const speakers = talksResult.data.speakers.nodes.map(node => {
        return {
            ...node.frontmatter,
            bio: node.html
        }
    });
    talksResult.data.talks.nodes.forEach(( node ) => {
        ["key", "title", "speakers"].forEach(key => {
            if(!node.frontmatter[key])
                throw Error(`There is no ${key} field in file ${node.fileAbsolutePath}`)
        });
        if(node.frontmatter.speakers.length<1)
            throw Error(`No speakers specified in ${node.fileAbsolutePath}`)

        const talkData = node.frontmatter;
        const path = `talks/${talkData.key}`;
        createPage({
            path,
            component: talkTemplate,
            context: {
                pagePath: path,
                talk: {
                    key: talkData.key,
                    title: talkData.title,
                    speakers: node.frontmatter.speakers.map(key => speakers.filter(speaker => speaker.key === key).pop()),
                    description: node.html
                }
            },
        })
    });
}