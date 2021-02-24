const graphql = require("graphql");
const ParkType = require("../types/ParkType");
const Park = require("../../database/models/park");
const {
    GraphQLString,    
} = graphql;

const AddPark = {
    type: ParkType,            
        args: {
            name: {type: GraphQLString},                
            description: {type: GraphQLString},   
        },
        resolve: async (parent, args) => {
            try {
                let lwr=args.name.toLowerCase().split(' ').join('');
                let park = await Park.findOne({nameCompare: lwr})
                if(park) throw new Error("Park vec postoji.")

                let newPark = new Park({
                    name: args.name,
                    nameCompare: lwr,                    
                    description: args.description    
                    })   

                park = await newPark.save()
                return {...park._doc};
            }
            catch(err) {
                console.log(err);
                throw err;
            };
        }
}

module.exports = {
    AddPark
}