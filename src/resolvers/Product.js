exports.Product = {
  category: (product, args, ctx) => {
    const { categories } = ctx;
    return categories.find((category) => category.id === product.categoryId);
  },
  reviews: ({ id }, args, ctx) => {
    const { reviews } = ctx;
    return reviews.filter((review) => review.productId === id);
  },
};
