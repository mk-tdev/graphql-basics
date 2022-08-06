const { categories } = require('../../mockdata/db.js');

exports.Product = {
  category: (product, args, ctx) => {
    return categories.find((category) => category.id === product.categoryId);
  },
};
