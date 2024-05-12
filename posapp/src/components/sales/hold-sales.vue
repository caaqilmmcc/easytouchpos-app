<template>
  <div class="space-y-3">
    <h1 class="font-semibold capitalize">hold sales</h1>
    <div class="grid grid-cols-1 gap-3">

      <CardHoldSales v-for="(item, index) in [1, 2]" :key="index" id="SALE1284" title="Take Away" userBy="admin" :items='1' no="Dine In" customer="Walking Customer" :total="800" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import CardHoldSales from '@/components/sales/card.vue'
</script>
