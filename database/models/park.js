const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Post = require("./post")

const parkSchema = new Schema({    
    name: {
        type: String,
        required: true
    },
    nameCompare: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
})

module.exports = mongoose.model("Park", parkSchema);