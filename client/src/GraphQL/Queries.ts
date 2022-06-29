import { gql } from "@apollo/client";

export const GET_ALL_GUITARS = gql`
  query getAllGuitars {
    getAllGuitars {
      brand
      model
      pickupConfig
      id
    }
  }
`;