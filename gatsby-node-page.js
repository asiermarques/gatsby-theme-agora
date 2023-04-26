exports.createPages = async ({ graphql, createPage, reporter }) => {
    const pageResult = await graphql(`
        {
          allMarkdownRemark(filter: {fields: {collection: {eq: "page"}}}) {
            nodes {
              frontmatter {
                title
                path
              }
              html
              fileAbsolutePath
            }
          }
        }
    `);
    if (pageResult.errors) {
        reporter.panicOnBuild(`Error while running Page GraphQL query.`)
        return
    }

    const internalTemplate = require.resolve(`./src/modules/_shared/templates/page.tsx`);
    pageResult.data.allMarkdownRemark.nodes.forEach(( node ) => {
        ["path", "title"].forEach(key => {
            if(!node.frontmatter[key])
                throw Error(`There is no ${key} field in file ${node.fileAbsolutePath}`)
        });

        const pageData = node.frontmatter;
        const path = pageData.path;

        createPage({
            path,
            component: internalTemplate,
            context: {
                pagePath: path,
                page: {
                    title: pageData.title,
                    content: node.html
                }
            },
        })
    });
}

