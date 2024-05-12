<script setup lang="ts">
import productList from '@/components/product-list.vue'
import SubCateogry from '@/components/sub-category.vue'
</script>

<template>
  <div
    class="relative space-y-3 flex h-full flex-col rounded-xl bg-muted/50 p-4"
  >
    <SubCateogry />
    <div class="py-4">
      <productList />
    </div>
  </div>
</template>
