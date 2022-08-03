import { GraphQLServer } from "graphql-yoga";
import { PubSub } from 'graphql-subscriptions';
import db from "./db/db";
import Query from "./resolvers/Query";
import User from "./resolvers/User";
import Post from "./resolvers/Post";
import Comment from "./resolvers/Comment";
import Mutation from "./resolvers/Mutation";
import Subscription from "./resolvers/Subscription";
require("./db/mongoose"); //for db connection


//demo data


//step1 => type definitions.......

//
const pubsub = new PubSub();

//step2 => resolvers

const resolvers = {
    Query,
    User,
    Post,
    Comment,
    Mutation,
    Subscription
};

//step3 create server and  pass those typedefs and resolvers to graphql server
async function startServer(){
  const server = new GraphQLServer({
    typeDefs:"./src/schemas.graphql",
    resolvers,
    context:{
      db,
      pubsub
    }
  });
  // step 4 start server
  await server.start(() => {
    console.log("server is up");
  });

//mongo0se
}
startServer();






