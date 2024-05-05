<script setup lang="ts">
import MainPos from '@/components/main-pos.vue'
import PosSheet from '@/components/pos-sheet.vue'
</script>

<template>
  <main class="flex items-start gap-4 flex-1 p-4">
    <MainPos />
    <div class="sticky hidden lg:block top-[73px] flex-1">
      <PosSheet />
    </div>
  </main>
</template>
