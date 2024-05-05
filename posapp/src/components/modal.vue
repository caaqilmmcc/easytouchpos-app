<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

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
  <Dialog :open="open" @update:open="handleClose">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ props.title }}</DialogTitle>
      </DialogHeader>

      <DialogFooter>
        <slot />
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
