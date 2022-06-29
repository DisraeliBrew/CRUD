import {GraphQLObjectType, GraphQLID, GraphQLString} from "graphql";

export const GuitarType = new GraphQLObjectType({
    name: "Guitar",
    fields: () => ({
        id: {type: GraphQLID},
        brand: {type: GraphQLString},
        pickupConfig: {type: GraphQLString},
        model: {type: GraphQLString},
    })
})