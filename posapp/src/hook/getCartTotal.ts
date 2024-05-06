
export function getCartTotal(products?: any[]) {
  const total = products&&products.reduce(
    (accumulator: number, currentProduct: any) => {
      return accumulator + currentProduct.rate;
    },
    0
  );
  return `${total?.toFixed(2)}`
}
