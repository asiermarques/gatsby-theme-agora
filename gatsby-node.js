const path = require("path");
const speakerNode = require("./gatsby-node-speaker");
const talkNode = require("./gatsby-node-talk");
const pageNode = require("./gatsby-node-page");
exports.createSchemaCustomization = ({ actions, schema }) => {
    const { createTypes } = actions

    const typeDefs = [
        schema.buildObjectType({
            name: "OrganizersYaml",
            fields: {
                name: "String!",
                link: "String!",
                image: "String!",
            },
            interfaces: ["Node"],
        }),
        schema.buildObjectType({
            name: "MarkdownRemarkFrontmatterSocial",
            fields: {
                twitter: "String",
                linkedin: "String",
                github: "String",
            },
            interfaces: ["Node"],
        }),
        schema.buildObjectType({
            name: "LinksYaml",
            fields: {
                name: "String!",
                link: "String!",
            },
            interfaces: ["Node"],
        }),
    ];
    createTypes(typeDefs);
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    if (node.internal.type === 'MarkdownRemark') {
        const instanceName = getNode(node.parent).sourceInstanceName
        const { createNodeField } = actions;
        createNodeField({
            name: `collection`,
            node,
            value: instanceName
        });
    }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    const {createPage} = actions;
    await speakerNode.createSpeakerPages({graphql, createPage, reporter});
    await talkNode.createTalkPages({graphql, createPage, reporter});
    await pageNode.createPages({graphql, createPage, reporter});
}