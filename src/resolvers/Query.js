exports.Query = {
  appName: () => 'My App',
  products: (_, { filter }, { products, reviews }) => {
    let filteredProducts = products;
    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale) {
        filteredProducts = products.filter((product) => product.onSale);
      }
      if (avgRating) {
        filteredProducts = filteredProducts.filter((product) => {
          const availableReviews = reviews.filter(
            (review) => review.productId === product.id
          );
          const avg =
            availableReviews.reduce((acc, curr) => {
              return acc + curr.rating;
            }, 0) / availableReviews.length;

          return avg >= avgRating;
        });
      }
    }
    return filteredProducts;
  },
  product: (_, { id }, ctx) => {
    const { products } = ctx;
    return products.find((product) => product.id === id);
  },
  categories: (parent, args, ctx) => {
    const { categories } = ctx;
    return categories;
  },
  category: (parent, args, ctx) => {
    const { categories } = ctx;
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
