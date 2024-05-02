<script setup lang="ts">
import Sidebar from "@/components/sidebar.vue";
import Header from "@/components/header.vue";
import MainPos from "@/components/main-pos.vue";
import PosSheet from "@/components/pos-sheet.vue";
</script>

<template>
  <div class="flex">
    <div class="sticky top-0 left-0 h-screen z-40">
      <Sidebar />
    </div>
    <div class="flex flex-1 flex-col">
      <div class="sticky top-0 z-40">
        <Header />
      </div>
      <main class="flex items-start gap-4 flex-1  p-4 ">
        <MainPos />
        <div class="sticky hidden lg:block top-[73px]  flex-1">
          <PosSheet />
        </div>
      </main>
    </div>
  </div>
</template>
