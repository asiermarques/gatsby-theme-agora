exports.createSpeakerPages = async ({ graphql, createPage, reporter }) => {
    const speakersResult = await graphql(`
        {
          allMarkdownRemark(filter: {fields: {collection: {eq: "speaker"}}}) {
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
              fileAbsolutePath
            }
          }
        }
    `);
    if (speakersResult.errors) {
        reporter.panicOnBuild(`Error while running Speakers GraphQL query.`)
        return
    }

    const speakerTemplate = require.resolve(`./src/modules/speaker/templates/speaker.tsx`);
    speakersResult.data.allMarkdownRemark.nodes.forEach(( node ) => {
        ["key", "image", "name"].forEach(key => {
            if(!node.frontmatter[key])
                throw Error(`There is no ${key} field in file ${node.fileAbsolutePath}`)
        });

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
                    bio: node.html
                }
            },
        })
    });
}

