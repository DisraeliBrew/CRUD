import { GuitarType } from "../TypeDefs/Guitar";
import * as ql from "graphql";
import { Guitars } from "../../Entities/Guitars";
export const ADD_GUITAR = {
  type: GuitarType,
  args: {
    brand: { type: ql.GraphQLString },
    pickupConfig: { type: ql.GraphQLString },
    model: { type: ql.GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { brand, pickupConfig, model } = args;
    await Guitars.insert({ brand, pickupConfig, model });
    return args;
  },
};

export const DELETE_GUITAR = {
  type: GuitarType,
  args: {
    id: { type: ql.GraphQLID },
  },
  async resolve(parent: any, args: any) {
    await Guitars.delete(args.id);

  },
};

export const UPDATE_GUITAR = {
  type: GuitarType,
  args: {
    id: { type: ql.GraphQLID },
    model: { type: ql.GraphQLString },
    brand: {type : ql.GraphQLString},
    pickupConfig: { type: ql.GraphQLString },
  },
  async resolve(parent: any, args: any) {
  
      const guitar = await Guitars.update(
        { id: args.id },
        {
          pickupConfig: args.pickupConfig,
          model: args.model,
          brand: args.brand
        }
      );
      if (!guitar) {
        throw new Error("entry not found");
      }

      if (!guitar) {
        throw new Error("entry not found");
      }
    
    return args;
  },
};
