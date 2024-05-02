<template>
  <fieldset class="space-y-3 shrink-0 rounded-lg border p-4">
    <legend class="-ml-1 px-1 text-sm font-medium">Payment Summary</legend>
    <div class="flex items-center justify-between">
      <h1>SubTotal</h1>
      <b>${{ SubTotal || "0.00" }}</b>
    </div>
    <div class="flex items-center justify-between">
      <h1>Discount</h1>
      <b>$0.00</b>
    </div>
    <Separator />
    <div class="flex items-center justify-between">
      <h1 class="text-lg font-bold">Total</h1>
      <b>${{ SubTotal || "0.00" }}</b>
    </div>
  </fieldset>
</template>
<script lang="ts" setup>
import { Separator } from "@/components/ui/separator";
import { computed } from "vue";
import { useCartStore } from "@/hook/store";
import { getCartTotal } from "@/hook/getCartTotal";
const { cart } = useCartStore((state) => state);
const SubTotal = computed(() => getCartTotal(cart.value));
</script>
