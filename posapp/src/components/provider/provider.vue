<template>
  <div>
    <SalesModal/>
    <CloseShiftModal/>
    <OpenShiftModal />
    <CartModal />
  </div>
</template>

<script lang="ts" setup>
import OpenShiftModal from '@/components/modal/open-shift-modal.vue'
import CartModal from '@/components/modal/cart-modal.vue'
import CloseShiftModal from "@/components/modal/close-shift-modal.vue"
import SalesModal from "@/components/modal/sales-modal.vue"
</script>
