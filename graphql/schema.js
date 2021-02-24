const graphql = require("graphql");
const queries = require("../graphql/queries/Queries");
const mutations = require("../graphql/mutations/Mutations");
const {
    GraphQLSchema,
    GraphQLObjectType,
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getParkByID: queries.parkQueries.getParkByID,
        getAllParks: queries.parkQueries.getAllParks
    }
});

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: {
        AddPark: mutations.parkMutations.AddPark,
        AddPost: mutations.postMutations.AddPost
    }    
})

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})

module.exports = schema;
