<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
  import { cn } from '@/lib/utils'

const props = defineProps<{
  title: string
  open: boolean
  onClose: () => void
  width?: string
}>()
const handleClose = () => {
  props.onClose()
}
</script>

<template>
  <Sheet :open="$props.open" @update:open="handleClose">
    <SheetContent :class="cn(props.width?props.width:'max-w-lg')">
      <SheetHeader>
        <SheetTitle>{{ props.title }}</SheetTitle>
      </SheetHeader>
      <div class="my-4 overflow-scroll">
        <slot />
      </div>
    </SheetContent>
  </Sheet>
</template>
