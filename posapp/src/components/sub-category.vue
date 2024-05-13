<script lang="ts" setup>
// import { ref } from 'vue'
import { Button } from '@/components/ui/button'

import { useCategory } from '@/hook/store'

const {
  subCategory,
  setSelectedCategory,
  isSelectedCategory,
  isSelectedSubCategory,
} = useCategory((state) => state)
</script>

<template>
  <div class="flex gap-1.5 overflow-hidden">
    <Button
      :variant="isSelectedSubCategory === item ? 'default' : 'outline'"
      @click="
        isSelectedSubCategory === item
          ? setSelectedCategory(isSelectedCategory, '', subCategory)
          : setSelectedCategory(isSelectedCategory, item, subCategory)
      "
      class="capitalize block rounded-full cursor-pointer"
      v-for="(item, index) in subCategory"
      :key="index"
    >
      {{ item }}
    </Button>
  </div>
</template>
