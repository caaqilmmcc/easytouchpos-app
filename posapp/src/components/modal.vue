<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
const props = defineProps<{
  title: string
  open: boolean
}>()
const
</script>

<template>
  <Dialog :open="open">
    <DialogTrigger> Edit Profile </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ $props.title }}</DialogTitle>
      </DialogHeader>

      <DialogFooter> 
        <slot/>
         </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
