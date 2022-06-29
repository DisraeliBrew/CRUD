import { gql } from "@apollo/client";

export const ADD_GUITAR = gql`
  mutation addGuitar($brand: String!, $model: String!, $pickupConfig: String!) {
    addGuitar(brand: $brand, model: $model, pickupConfig: $pickupConfig) {
  brand
  model
    }
  }
`;

export const UPDATE_GUITAR = gql`
  mutation updateGuitar(
    $id: ID!
    $brand: String!
    $model: String! 
    $pickupConfig: String!
    
  ) {
    updateGuitar(
        id: $id
        brand: $brand
        model: $model
      pickupConfig: $pickupConfig
      
    ) {
        pickupConfig
    }
    
  }
`;

export const DELETE_GUITAR = gql`
  mutation deleteGuitar($id: ID!) {
    deleteGuitar(id: $id) {
     brand
    }
  }
`;