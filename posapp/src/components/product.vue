<script setup lang="ts">
import { Checkbox } from "@/components/ui/checkbox";
import { useCartStore } from "@/hook/store";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
const {cart, addToCart, removeAllById} =useCartStore((state)=>state)
const { product } = defineProps<{
  product: Product;
}>();
// Check if the cart contains the product object itself
// Check if the cart contains the product object itself
const isProductInCart = (product: Product) => {
  return cart.value.some((item:Product) => item.id === product.id);
};
</script>

<template>
  <div>
    <Checkbox
      :id="`checkbox-${product.id}`"
     @click="isProductInCart(product)?removeAllById(product) :addToCart(product)"
     :checked="isProductInCart(product)"
     
      class="peer sr-only"
    />
    <Label
      :for="`checkbox-${product.id}`"
      class="flex cursor-pointer flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
    >
      <div
        class="bg-white rounded-xl flex justify-center items-center w-full h-28"
      >
        <img :src="product.image" :alt="product.title" class="h-16 mb-2" />
      </div>
      <div class="p-1.5 flex flex-col items-center">
        <b> ${{ product.price }} </b>
        <small>{{ product.category }}</small>
      </div>
    </Label>
  </div>
</template>
