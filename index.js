const { ApolloServer, gql } = require('apollo-server');
const { typeDefs } = require('./src/schema');
const { Query } = require('./src/resolvers/query');
const { Product } = require('./src/resolvers/Product');
const { Category } = require('./src/resolvers/Category');

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: {
    Query: Query,
    Product: Product,
    Category: Category,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
