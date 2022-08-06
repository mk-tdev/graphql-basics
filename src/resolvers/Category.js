const { products } = require('../../mockdata/db.js');

exports.Category = {
  products: (parent, args, ctx) => {
    return products.filter((product) => parent.id === product.categoryId);
  },
};
