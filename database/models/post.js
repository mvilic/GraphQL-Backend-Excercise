const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Park = require("./park");

const postSchema = new Schema({    
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    park:{
        type: Schema.Types.ObjectId,
        ref: "Park"
    }
    
})

module.exports = mongoose.model("Post", postSchema);