const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLID, 
    GraphQLString
} = graphql;

const PostType = new GraphQLObjectType({
    name: "Post",
    fields: {
        _id: {type: GraphQLID},
        title: {type: new graphql.GraphQLNonNull(GraphQLString)},
        text: {type: new graphql.GraphQLNonNull(GraphQLString)},
        imageURL: {type: new graphql.GraphQLNonNull(GraphQLString)},  
        park: {type: GraphQLID}      
    }
});

module.exports = PostType;