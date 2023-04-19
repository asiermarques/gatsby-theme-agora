exports.createSchemaCustomization = ({ actions, schema }) => {
    const { createTypes } = actions

    const typeDefs = [
        schema.buildObjectType({
            name: "OrganizersYaml",
            fields: {
                name: "String",
                link: "String",
                image: "String",
            },
            interfaces: ["Node"],
        }),
        schema.buildObjectType({
            name: "LinksYaml",
            fields: {
                name: "String",
                link: "String",
            },
            interfaces: ["Node"],
        }),
    ];
    createTypes(typeDefs);
}