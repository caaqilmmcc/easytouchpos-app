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
console.log(isSelectedCategory, '💯')
</script>

<template>
  <div class="flex items-center overflow-auto gap-1">
    <Button
      :variant="isSelectedSubCategory === item ? 'default' : 'outline'"
      size="sm"
      @click="
        isSelectedSubCategory === item
          ? setSelectedCategory(isSelectedCategory, '', subCategory)
          : setSelectedCategory(isSelectedCategory, item, subCategory)
      "
      class="capitalize rounded-full cursor-pointer"
      v-for="(item, index) in subCategory"
      :key="index"
    >
      {{ item }}
    </Button>
  </div>
</template>
