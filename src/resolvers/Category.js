exports.Category = {
  products: (parent, args, ctx) => {
    console.log(parent);
    const { products, reviews } = ctx;
    let filteredProducts = products.filter(
      (product) => parent.id === product.categoryId
    );

    if (args.filter) {
      const { onSale, avgRating } = args.filter;

      if (onSale) {
        filteredProducts = filteredProducts.filter((product) => product.onSale);
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
};
