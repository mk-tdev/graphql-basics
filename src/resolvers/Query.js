const { products, categories } = require('../../mockdata/db.js');

exports.Query = {
  appName: () => 'My App',
  products: () => products,
  product: (_, { id }, ctx) => {
    return products.find((product) => product.id === id);
  },
  categories: () => categories,
  category: (parent, args, ctx) => {
    return categories.find((category) => category.id === args.id);
  },
};

// const resolvers = {
//   Query: {
//     appName: () => 'My App',
//     products: () => products,
//     product: (_, { id }, ctx) => {
//       return products.find((product) => product.id === id);
//     },
//     categories: () => categories,
//     category: (parent, args, ctx) => {
//       return categories.find((category) => category.id === args.id);
//     },
//   },
//   Product: {
//     category: (product, args, ctx) => {
//       return categories.find((category) => category.id === product.categoryId);
//     },
//   },
//   Category: {
//     products: (parent, args, ctx) => {
//       return products.filter((product) => parent.id === product.categoryId);
//     },
//   },
// };
