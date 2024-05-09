<template>
  <div class="space-y-3">
    <h1 class="font-semibold capitalize">pending orders</h1>
    <div class="grid grid-cols-1 gap-3">
      <CardPendingOrder  v-for="(item, index) in [1, 2]" :key="index" id="SALE1214" title="Take Away" userBy="admin" :items='5' :piad="12000" :dua="0.00" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import CardPendingOrder from '@/components/sales/card.vue'
</script>
