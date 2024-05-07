<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
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
  <Dialog :open="open" @update:open="handleClose">
    <DialogContent :class="cn(props.width?props.width:'max-w-lg')">
      <DialogHeader>
        <DialogTitle>{{ props.title }}</DialogTitle>
      </DialogHeader>
      <DialogFooter>
        <slot />
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
