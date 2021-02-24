const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID, 
    GraphQLString
} = graphql;
const PostType = require("./PostType");

const ParkType = new GraphQLObjectType({
    name: "Park",
    fields: {
        _id: {type: new graphql.GraphQLNonNull(GraphQLID)},
        name: {type: new graphql.GraphQLNonNull(GraphQLString)},    
        description: {type: new graphql.GraphQLNonNull(GraphQLString)},
        posts: {type: GraphQLList(new graphql.GraphQLNonNull(PostType))}
    }
});

module.exports = ParkType