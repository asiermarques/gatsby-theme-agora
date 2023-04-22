
exports.createTalkPages = async ({ graphql, createPage, reporter }) => {
    const talksResult = await graphql(`{
      speakers:allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(content/speakers)/"}}) {
        nodes {
          frontmatter {
            name
            key
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          html
        }
      }
      talks:allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(content/talks)/"}}) {
        nodes {
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

    const talkTemplate = require.resolve(`./src/templates/talk.js`);
    const speakers = talksResult.data.speakers.nodes.map(node => {
        return {
            ...node.frontmatter,
            bio: node.html
        }
    });
    talksResult.data.talks.nodes.forEach(( node ) => {
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