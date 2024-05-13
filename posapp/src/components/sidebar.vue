<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useCategory } from '@/hook/store'

import {
  Utensils,
  Drumstick,
  Pizza,
  CupSoda,
  IceCream,
  Donut,
  Dessert,
} from 'lucide-vue-next'
const { setSelectedCategory, isSelectedCategory } = useCategory(
  (state) => state
)

const navItems = [
  {
    label: 'All Dishes',
    value: 'Demo Item Group',
    icon: Utensils,
    subCategories: [
      'chicken',
      'beef',
      'vegetarian',
      'supreme',
      'soda',
      'juice',
      'tea',
      'coffee',
      'smoothie',
      'cake',
      'ice_cream',
      'pie',
      'pudding',
      'cookies',
      'chips',
    
    ],
  },
  {
    label: 'Meat',
    value: 'meat',
    icon: Drumstick,
    subCategories: ['chicken', 'beef', 'lamb'],
  },
  {
    label: 'Burger',
    value: 'burger',
    icon: Dessert,
    subCategories: ['classic', 'cheese', 'vegetarian', 'spicy'],
  },
  {
    label: 'Pizza',
    value: 'pizza',
    icon: Pizza,
    subCategories: ['margherita', 'pepperoni', 'vegetarian', 'supreme'],
  },
  {
    label: 'Drink',
    value: 'drink',
    icon: CupSoda,
    subCategories: ['soda', 'juice', 'tea', 'coffee', 'smoothie'],
  },
  {
    label: 'Desserts',
    value: 'desserts',
    icon: IceCream,
    subCategories: ['cake', 'ice_cream', 'pie', 'pudding', 'cookies'],
  },
  {
    label: 'Snacks',
    value: 'snaks',
    icon: Donut,
    subCategories: ['chips', 'nuts', 'popcorn', 'pretzels', 'crackers'],
  },
]
</script>

<template>
  <aside class="inset-y bg-background h-full flex-col border-r flex justify-between">
    <div>
      <div class="border-b flex items-center justify-center h-14 p-2">
        <h1>LOGO</h1>
      </div>
      <nav class="grid gap-2 p-2">
        <Button
          :variant="isSelectedCategory === item.value ? 'default' : 'outline'"
          @click="
            isSelectedCategory === item.value
              ? setSelectedCategory()
              : setSelectedCategory(item.value, '', item.subCategories)
          "
          size="lg"
          class="flex flex-col gap-2 h-24"
          v-for="(item, index) in navItems"
          :key="index"
        >
          <component :is="item.icon" class="w-7 h-7" />
          <span>
            {{ item.label }}
          </span>
        </Button>
      </nav>
    </div>
  </aside>
</template>
