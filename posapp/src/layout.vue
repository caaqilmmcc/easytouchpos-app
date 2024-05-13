<template>
  <div class="w-full min-h-screen overflow-hidden">

    <div>
      <Provider />
    </div>
    <div class="flex">
      <div class="sticky w-36  top-0 left-0 h-screen z-40">
        <Sidebar />
      </div>
      <div class="flex flex-1 flex-col">
        <div class="sticky w-full top-0 z-40">
          <Header />
        </div>
        <main class="w-full">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Provider from '@/components/provider/provider.vue'
import Sidebar from "@/components/sidebar.vue";
import Header from "@/components/header.vue";
</script>
