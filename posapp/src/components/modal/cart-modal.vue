<template>
  <div>
    <SheetModal
      :open="isOpen && modalType==='CartModal'"
      :onClose="onClose"
      title="Carts"
    >
      <PosSheet hight="h-[calc(100vh-89px-40px)]" />
    </SheetModal>
  </div>
</template>
<script setup lang="ts">
import SheetModal from "@/components/sheet-modal.vue";
import PosSheet from "@/components/pos-sheet.vue";
import { useModalSheet } from "@/hook/store";
const { isOpen, modalType, onClose } = useModalSheet(state=>state);
</script>
