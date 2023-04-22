const path = require("path");
const speakerNode = require("./gatsby-node-speaker");
const talkNode = require("./gatsby-node-talk");
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
            name: "SocialNode",
            fields: {
                twitter: "String",
                linkedin: "String",
                github: "String",
            },
            interfaces: ["Node"],
        }),
        /*schema.buildObjectType({
            name: "Speaker",
            fields: {
                key: "String!",
                name: "String!",
                title: "String",
                image: "String!",
                bio: "String",
                social: "SocialNode"
            },
            interfaces: ["Node"],
        }),*/
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

exports.createPages = async ({ graphql, actions, reporter }) => {
    const {createPage} = actions;
    await speakerNode.createSpeakerPages({graphql, createPage, reporter});
    await talkNode.createTalkPages({graphql, createPage, reporter});
}