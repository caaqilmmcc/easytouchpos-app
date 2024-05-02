import { Product as ProductType } from "@/components/product.vue";

export function cartGroupById(
  products?: ProductType[]
): Record<string, ProductType[]> {
  return (
    (products ?? []).reduce(
      (
        accumulator: Record<string, ProductType[]>,
        currentProduct: ProductType
      ) => {
        const id = currentProduct.id;
        if (!accumulator[id]) {
          accumulator[id] = [];
        }
        accumulator[id].push(currentProduct);
        return accumulator;
      },
      {}
    ) 
  );
}
