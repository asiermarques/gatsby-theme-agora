
exports.createSpeakerPages = async ({ graphql, createPage, reporter }) => {
    const speakersResult = await graphql(`
        {
          allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(content/speakers)/"}}) {
            nodes {
              frontmatter {
                name
                slug
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
              internal {
                content
              }
            }
          }
        }
    `);
    if (speakersResult.errors) {
        reporter.panicOnBuild(`Error while running Speakers GraphQL query.`)
        return
    }

    const speakerTemplate = require.resolve(`./src/templates/speaker.js`);
    speakersResult.data.allMarkdownRemark.nodes.forEach(( node ) => {
        const speakerData = node.frontmatter;
        const path = `speakers/${speakerData.key}`;
        createPage({
            path,
            component: speakerTemplate,
            context: {
                pagePath: path,
                speaker: {
                    key: speakerData.key,
                    image: speakerData.image,
                    name: speakerData.name,
                    title: speakerData.title,
                    social: speakerData.social,
                    bio: node.internal.content
                }
            },
        })
    });
}