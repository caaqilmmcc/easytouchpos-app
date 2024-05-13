<script setup lang="ts">
import productList from '@/components/product-list.vue'
import SubCateogry from '@/components/sub-category.vue'
</script>

<template>
  <div
    class="relative space-y-3 py-2 h-full rounded-xl bg-muted/50 p-4"
  >

    <SubCateogry />
 
      <productList />
  </div>
</template>
