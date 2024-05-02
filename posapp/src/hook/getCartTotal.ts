import { Product as ProductType } from "@/components/product.vue";

export function getCartTotal(products?: ProductType[]) {
  const total = products&&products.reduce(
    (accumulator: number, currentProduct: ProductType) => {
      return accumulator + currentProduct.price;
    },
    0
  );
  return `${total?.toFixed(2)}`
}
