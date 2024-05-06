
export function cartGroupById(
  products?: any[]
): Record<string, any[]> {
  return (
    (products ?? []).reduce(
      (
        accumulator: Record<string, any[]>,
        currentProduct: any
      ) => {
        const id = currentProduct.item_code;
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
