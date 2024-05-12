<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
const props = defineProps<{
  title?: string
  open: boolean
  onClose: () => void
  width?: string,
  description?: string,
}>()
const handleClose = () => {
  props.onClose()
}
</script>

<template>
  <Dialog :open="open" @update:open="handleClose">
    <DialogContent :class="cn(props.width?props.width:'max-w-lg')">
      
      <DialogHeader v-if=" props.title && props.description">
        <DialogTitle>{{ props.title }}</DialogTitle>
        <DialogDescription>{{ props.description }}</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <slot />
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
