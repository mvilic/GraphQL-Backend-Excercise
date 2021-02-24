const graphql = require("graphql");
const ParkType = require("../types/ParkType");
const Park = require("../../database/models/park");
const {
    GraphQLID,
} = graphql;


const getParkByID = {
    type: ParkType,
        args: {id: {type: GraphQLID}},
        resolve: (parent, args) => { 
            return Park.findById(args.id).populate("posts");
        }
}

const getAllParks = {
    type: graphql.GraphQLList(ParkType),
    resolve: async () => {
        try {
            const parks = await Park.find().populate("posts")
            return parks.map(park => {
                return {...park._doc};
            })
        }
        catch(err){
            throw err;
        };
    }
}

module.exports = {
    getParkByID,
    getAllParks
}