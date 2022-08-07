const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./src/schemas/schema');
const { Query } = require('./src/resolvers/query');
const { Product } = require('./src/resolvers/Product');
const { Category } = require('./src/resolvers/Category');
const { products, categories, reviews } = require('./mockdata/db.js');

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: {
    Query: Query,
    Product: Product,
    Category: Category,
  },
  context: {
    products,
    categories,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
