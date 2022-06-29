import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./App.css";
import AddGuitar from "./Components/AddGuitar";
import ListofGuitars from "./Components/ListOfGuitars";
import UpdateGuitar from "./Components/UpdateGuitar";

function App() {
  const client = new ApolloClient({ 
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <AddGuitar />
        <ListofGuitars />
        <UpdateGuitar />
      </ApolloProvider>
    </>
  );
}

export default App;