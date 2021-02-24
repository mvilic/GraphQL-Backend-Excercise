const graphql = require("graphql");
const PostType = require("../types/PostType");
const Park = require("../../database/models/park");
const Post = require("../../database/models/post");
const {
    GraphQLID,
    GraphQLString,    
} = graphql;

const AddPost = {
    type: PostType,
    args: {
        title: {type: new graphql.GraphQLNonNull(GraphQLString)},
        text: {type: new graphql.GraphQLNonNull(GraphQLString)},
        imageURL: {type: new graphql.GraphQLNonNull(GraphQLString)},
        park: {type: graphql.GraphQLNonNull(GraphQLID)},
    },
    resolve: async (parent, args) => {
        let createdPost
        let newPost = new Post({
            title: args.title,
            text: args.text,
            imageURL: args.imageURL,
            park: args.park                  
        });

        try {
            let response = await newPost.save();
            createdPost = { ...response._doc };

            let park = await Park.findById(args.park);
            if (!park) throw new Error("Park u pitanju ne postoji.");

            park.posts.push(newPost);
            park.save();
            return createdPost;
        } catch (err) {
            console.log(err);
            throw err;
        };
    }
}

module.exports = {
    AddPost
}