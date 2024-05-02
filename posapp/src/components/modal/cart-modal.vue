<template>
  <div>
    <SheetModal
      :open="isOpen && modalType === 'CartModal'"
      :onClose="onClose"
      title="Cart Modal"
    >
      <template #btnTrigger>
        <Button size="icon">
          <ShoppingCart class="w-4 h-4" />
        </Button>
      </template>
      <PosSheet />
    </SheetModal>
  </div>
</template>
<script setup lang="ts">
import SheetModal from "@/components/sheet-modal.vue";
import PosSheet from "@/components/pos-sheet.vue";
import { useModal } from "@/hook/store";
import { ShoppingCart } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
const { isOpen, modalType, onClose } = useModal();
</script>
