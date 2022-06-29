import express from "express";
import {graphqlHTTP} from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";
import { schema } from "./schema/index";
import { Guitars } from "./Entities/Guitars"; 
const main =async () => {
    await createConnection({
        type: "mysql",
        database: "graphqlcrud",
        username: "root",
        password: "",
        logging: true,
        synchronize: false,
        entities: [Guitars]
    })
    const app = express()
    app.use(cors())
    app.use(express.json())
    
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql:true
    }))

    app.listen(3001, () => {
        console.log("server running on 3001");
    })
}

main().catch((err) => {
    console.log(err)
})