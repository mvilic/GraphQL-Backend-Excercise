const express = require("express");
const cors = require("cors");
const {graphqlHTTP} = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./graphql/schema");

const app = express();

app.use(cors());
app.use(
    "/graphql", 
    graphqlHTTP({
        schema,
        graphiql:true,
        pretty: true
    })
);

app.get("/", (req, res, next) => {
    res.send("Server up and running.");
});

const uri = "mongodb+srv://nwt1:1234@cluster0.n3cki.mongodb.net/nacionalni-parkovi?retryWrites=true&w=majority";
mongoose.connect(uri, 
                {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            app.listen(
                9200,
                () => {console.log("Server listening on 9200")});
            })
        .catch(err => {console.log(err);
        });
