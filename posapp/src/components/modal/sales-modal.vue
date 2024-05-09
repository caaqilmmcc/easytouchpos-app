<template>
  <SheetModal
    :open="isOpen && modalType === 'SalesSheet'"
    :onClose="onClose"
    title="Sales Sheet."
    width="max-w-xl"
  >
    <Tabs default-value="Pending">
      <TabsList>
        <TabsTrigger
          :class="selected == 'Pending' && 'bg-background'"
          @click="selected = 'Pending'"
          value="Pending"
        >
          Pending
        </TabsTrigger>
        <TabsTrigger
          :class="selected == 'holdSales' && 'bg-background'"
          @click="selected = 'holdSales'"
          value="holdSales"
        >
          Hold Sales
        </TabsTrigger>
        <TabsTrigger
          :class="selected == 'recentSales' && 'bg-background'"
          @click="selected = 'recentSales'"
          value="recentSales"
        >
          Recent Sales
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Pending">
        <PendingOrder />
      </TabsContent>
      <TabsContent value="holdSales">
        <HoldSales />
      </TabsContent>
      <TabsContent value="recentSales">
        <RecentSales />
      </TabsContent>
    </Tabs>
  </SheetModal>
</template>
<script lang="ts" setup>
import SheetModal from '@/components/sheet-modal.vue'
import { useModalSheet } from '@/hook/store'
import PendingOrder from '@/components/sales/pending-order.vue'
import HoldSales from '@/components/sales/hold-sales.vue'
import RecentSales from '@/components/sales/recent-sales.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ref } from 'vue'
const selected = ref('Pending')
const { isOpen, modalType, onClose } = useModalSheet((state) => state)
</script>

<!-- 
<li className="flex items-center justify-between font-semibold">
  <span className="text-muted-foreground">Total</span>
  <span>$329.00</span>
</li> -->
