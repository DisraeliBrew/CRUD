import React, { useState } from "react";
import { UPDATE_GUITAR } from "../GraphQL/Mutation"
import { useMutation } from "@apollo/client";

function UpdateGuitar() {
  const [brand, setBrand] = useState("");
  const [model, setCurrentModel] = useState("");
  const [pickupConfig, setPickupConfig] = useState("");
    const [id, setID] = useState("")
  const [updateGuitar, { error }] = useMutation(UPDATE_GUITAR);


  return (
    <div>
      <input
        type="text"
        placeholder="ID"
        onChange={(event) => {
          setID(event.target.value);
        }}
      />    
      <input
        type="text"
        placeholder="Brand"
        onChange={(event) => {
          setBrand(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Model"
        onChange={(event) => {
          setCurrentModel(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Pickup Config"
        onChange={(event) => {
          setPickupConfig(event.target.value);
        }}
      />

      <button
        onClick={() => {
          updateGuitar({
            variables: {
            id: id,
              brand: brand,
              model:model,
              pickupConfig:pickupConfig,
            },
          });
        }}
      >
        Update Guitar
      </button>
    </div>
  );
}

export default UpdateGuitar;