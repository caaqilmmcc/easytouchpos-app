<script setup lang="ts">
import {
  FileBarChart,
  ShoppingCart,
  UserCircle,
  LogOut,
} from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { useModalSheet } from '@/hook/store'
import { currentUser } from '@/hook/currentUser'
import { getOpeningShit } from '@/hook/getOpenShift'
import { Search } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'

import { ref } from 'vue'
const profileName = ref('')
const { onOpen } = useModalSheet((state) => state)
const userProfiel = async () => {
  await getOpeningShit(`${currentUser()}`).then(
    (response) =>
      (profileName.value = response.message.pos_opening_shift.pos_profile)
  )
}
userProfiel()
</script>
<template>
  <header
    class="flex h-[57px] items-center justify-between gap-4 border-b bg-background px-4"
  >
  <div class="relative w-full  items-center">
    <Input id="search" type="text" placeholder="Search..." class="pl-10" />
    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
      <Search class="size-6 text-muted-foreground" />
    </span>
  </div>
    <div class="flex items-center gap-3">
      <Button @click="onOpen('SalesSheet')">
        <FileBarChart class="w-4 h-4" />
      </Button>
      <ModeToggle />

      <Button class="lg:hidden block" @click="onOpen('CartModal')">
        <ShoppingCart class="w-4 h-4" />
      </Button>
      <div class="flex items-center capitalize gap-2">
        <b>{{ profileName }}</b>
        <UserCircle class="w-5 h-5" />
      </div>
      <Button
        @click="onOpen('CloseShiftModal')"
        variant="ghost"
        size="icon"
        class="rounded-lg"
        aria-label="Documentation"
      >
        <LogOut class="size-5" />
      </Button>
    </div>
  </header>
</template>
