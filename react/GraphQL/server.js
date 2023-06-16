//Graphql server oluşturmak
//yarn add express express-graphql paketi lazım.
const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const myGraphQLSchema = require("./schema");

const app = express();
//express middlewear olarak graphql http,
//ilk parametre url bilgisi. 
//graphiql:true ile gragiql test ortamında kodlarımızı yazabilicez.
app.use("/graphql", graphqlHTTP({
    schema:myGraphQLSchema,
    graphiql:true
}));

app.listen(4000,()=>{
    console.log("server dinleniyor");
});