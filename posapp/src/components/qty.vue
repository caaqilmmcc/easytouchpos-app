<template>
  <div class="border rounded-full flex gap-2 p-1 items-center">
    <Button
      @click="removeFromCart(item)"
      size="icon"
      class="rounded-full w-5 h-5"
      ><Minus class="w-3 h-3"
    /></Button>
    <p>{{ numberQty }}</p>
    <Button
      @click="numberQty <props.item.is_stock_item && addToCart(item)"
      size="icon"
      class="rounded-full w-5 h-5"
      ><Plus class="w-3 h-3"
    /></Button>
  </div>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-vue-next'
import { useCartStore } from '@/hook/store'
import { computed } from 'vue'

const { removeFromCart, addToCart, cart } = useCartStore((state) => state)

const props = defineProps<{
  item: any
}>()
const numberQty = computed(
  () =>
    cart.value.filter((item: any) => item.item_code == props.item.item_code)
      .length
)
</script>
