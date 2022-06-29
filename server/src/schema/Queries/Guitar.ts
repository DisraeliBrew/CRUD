import {GuitarType} from '../TypeDefs/Guitar'
import * as ql from "graphql"
import { Guitars } from '../../Entities/Guitars'
export const GET_ALL_GUITARS = {
    type: new ql.GraphQLList(GuitarType),
    resolve() {
        return Guitars.find();
    },
};