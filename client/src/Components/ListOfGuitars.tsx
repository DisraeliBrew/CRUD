import React from "react";
import { GET_ALL_GUITARS } from "../GraphQL/Queries";
import { DELETE_GUITAR } from "../GraphQL/Mutation";
import { useQuery, useMutation } from "@apollo/client";

function ListOfGuitars() {
  const { data } = useQuery(GET_ALL_GUITARS);

  const [deleteGuitar, { error }] = useMutation(DELETE_GUITAR);

  return (
    <div>
      {data &&
        data.getAllGuitars.map((guitar: any) => {
          return (
            <div>
              {guitar.brand} / {guitar.model}/{guitar.pickupConfig}
              <button
                onClick={() => {
                  deleteGuitar({ variables: { id: guitar.id } });
                    console.log(guitar);
                }}
              >
                Remove Guitar
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default ListOfGuitars;