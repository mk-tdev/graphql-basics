const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type Query {
    appName: String
    products(filter: ProductInputFilter): [Product]!
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
    reviews: [Review]
  }
  type Category {
    id: ID!
    name: String
    products(filter: ProductInputFilter): [Product!]!
  }
  type User {
    id: ID!
    name: String
    email: String
  }
  type Review {
    id: ID!
    date: String
    title: String
    comment: String
    rating: Int
  }
  input ProductInputFilter {
    onSale: Boolean
    avgRating: Int!
  }
`;
