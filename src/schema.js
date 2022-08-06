const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type Query {
    appName: String
    products: [Product]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }
  type Product {
    id: ID!
    name: String
    price: Float
    quantity: Int
    description: String
    image: String
    onSale: Boolean
    category: Category
  }
  type Category {
    id: ID!
    name: String
    products: [Product!]!
  }
  type User {
    id: ID!
    name: String
    email: String
  }
`;
