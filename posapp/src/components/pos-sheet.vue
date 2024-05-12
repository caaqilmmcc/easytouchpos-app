<template>
  <div
    :class="
      cn(
        props.hight ? props.hight : 'h-[calc(100vh-89px)]',
        'flex-col bg-background items-start gap-8'
      )
    "
  >
    <div class="flex flex-col justify-between w-full h-full gap-6">
      <SelectCustomer />
      <PosCart />
      <div>
        <PaymentSummaryCart />
      </div>
      <div class="w-full flex gap-2">
        <Button
          variant="outline"
          class="flex flex-col gap-1 w-20 h-16 items-center justify-center"
          ><Bell class="w-4 h-4" /><span>Service</span></Button
        >
        <Button
          variant="outline"
          class="flex flex-col gap-1 w-20 h-16 items-center justify-center"
          ><ScrollText class="w-4 h-4" /><span>Bill</span></Button
        >
        <Button
          class="flex flex-col gap-1 h-16 flex-1 items-center justify-center"
          ><Computer class="w-4 h-4" /><span>Submit Order</span></Button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PosCart from '@/components/pos-cart.vue'
import PaymentSummaryCart from '@/components/payment-summary-cart.vue'
import SelectCustomer from '@/components/selectCustomer.vue'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Bell, Computer, ScrollText } from 'lucide-vue-next'

const props = defineProps<{
  hight?: string
}>()
</script>
