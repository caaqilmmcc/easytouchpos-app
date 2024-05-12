<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { useCartStore, useModalSheet } from '@/hook/store'

export type Product = {
  item_code: any
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}
const { onOpen } = useModalSheet((state) => state)
const { cart, addToCart, removeAllById } = useCartStore((state) => state)
const { product } = defineProps<{
  product: any
}>()
// Check if the cart contains the product object itself
// Check if the cart contains the product object itself
const isProductInCart = (product: any) => {
  return cart.value.some(
    (item: Product) => item.item_code === product.item_code
  )
}
</script>

<template>
  <div>
    <Checkbox
      :id="`checkbox-${product.item_code}`"
      @click="onOpen('ItemDetailModal', product)"
      :checked="isProductInCart(product)"
      class="peer sr-only"
    />
    <Label
      :for="`checkbox-${product.item_code}`"
      :class="` flex cursor-pointer flex-col  justify-between rounded-xl border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ${
        isProductInCart(product) && 'border-primary'
      }`"
    >
      <div
        class="bg-white rounded-xl relative overflow-hidden flex justify-center items-center w-full h-36"
      >
        <img
          :src="product.image"
          :alt="product.item_name"
          class="inset-0 z-0 absolute object-cover w-full h-full"
        />
      </div>
      <div class="p-2">
        <div class="flex justify-between">
          <div class="flex flex-col">
            <b>{{ product.item_name }}</b>
            <small class="text-gray-400">{{ product.description }}</small>
            <b>${{ product.rate }} </b>
          </div>
        </div>
      </div>
    </Label>
  </div>
</template>
