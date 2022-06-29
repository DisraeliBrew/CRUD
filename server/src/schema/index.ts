import * as ql from "graphql"
import { GET_ALL_GUITARS } from "./Queries/Guitar"
import { ADD_GUITAR, DELETE_GUITAR, UPDATE_GUITAR } from "./Mutations/Guitar"
const RootQuery = new ql.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllGuitars :  GET_ALL_GUITARS
    }
})
const Mutation = new ql.GraphQLObjectType({
    name: "Mutation",
    fields: {
        addGuitar : ADD_GUITAR,
        deleteGuitar: DELETE_GUITAR,
        updateGuitar: UPDATE_GUITAR
    }
})
export const schema = new ql.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})

