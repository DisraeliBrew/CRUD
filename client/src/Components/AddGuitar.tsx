import React, { useState } from "react";
import {ADD_GUITAR} from "../GraphQL/Mutation"
import { useMutation } from "@apollo/client";
function CreateUser() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [pickupConfig, setPickup] = useState("");

  const [addGuitar, { error }] = useMutation(ADD_GUITAR);

  return (
    <div className="createUser">
      <input
        type="text"
        placeholder="brand"
        onChange={(event) => {
          setBrand(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="model"
        onChange={(event) => {
          setModel(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Pickup Configuration"
        onChange={(event) => {
          setPickup(event.target.value);
        }}
      />
      <button
        onClick={() => {
          addGuitar({
            variables: {
              model: brand,
              brand: model,
              pickupConfig: pickupConfig,
            },
          });
        }}
      >
        Add Guitar
      </button>
    </div>
  );
}

export default CreateUser;