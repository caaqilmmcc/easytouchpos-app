<script setup lang="ts">
import { ShoppingCart, UserCircle } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { useModalSheet } from '@/hook/store'
import { session } from '@/data/session'

const { onOpen } = useModalSheet((state) => state)

</script>
<template>
  <header
    class="flex h-[57px] items-center justify-between gap-1 border-b bg-background px-4"
  >
    <h1 class="text-xl font-semibold">EasyTouch POS</h1>
    <div class="flex items-center gap-4">
      <ModeToggle />
      <Button class="lg:hidden block" @click="onOpen('CartModal')">
        <ShoppingCart class="w-4 h-4" />
      </Button>
      <div class="flex items-center capitalize gap-2">
        <b>{{ session.user }}</b>
        <UserCircle class="w-5 h-5" />
      </div>
    </div>
  </header>
</template>
