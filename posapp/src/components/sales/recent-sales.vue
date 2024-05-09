<template>
  <div class="space-y-3 mb-4">
    <h1 class="font-semibold capitalize">recent sales</h1>
    <div class="grid grid-cols-1 gap-3">
      <CardRecentSales  v-for="(item, index) in [1, 2]" :key="index" id="SALE1292" title="Take Away" userBy="admin" :items='5' no="Dine In" customer="Walking Customer" :piad="12000" :dua="0.00" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import CardRecentSales from '@/components/sales/card.vue'
</script>
