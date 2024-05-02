<script setup lang="ts">
import { ModeToggle } from "@/components/ui/mode-toggle";
</script>
<template>
  <header
    class="flex h-[57px] items-center justify-between gap-1 border-b bg-background px-4"
  >
    <h1 class="text-xl font-semibold">EasyTouch POS</h1>
    <div class="flex items-center gap-4">
      <ModeToggle />
    </div>
  </header>
</template>
