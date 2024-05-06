<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
const props = defineProps<{
  title: string
  open: boolean
  onClose: () => void
}>()
const handleClose = () => {
  props.onClose()
}
</script>

<template>
  <Sheet :open="$props.open" @update:open="handleClose">
    <SheetContent>
      <SheetHeader>
        <SheetTitle>{{ props.title }}</SheetTitle>
      </SheetHeader>
      <div class="my-4">
        <slot />
      </div>
    </SheetContent>
  </Sheet>
</template>
