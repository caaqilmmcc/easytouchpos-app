<script setup lang="ts">
import MainPos from '@/components/main-pos.vue'
import PosSheet from '@/components/pos-sheet.vue'
</script>

<template>
  <main class="flex items-start w-full gap-4 overflow-hidden  p-4">
    <div class="flex-[2] 2xl:flex-[3]">

      <MainPos />
    </div>
    <div class="sticky hidden lg:block top-[73px] flex-1 shrink-0">
      <PosSheet />
    </div>
  </main>
</template>
