<template>
  <div>
    <Provider />
  </div>
  <div class="flex">
    <div class="sticky top-0 left-0 h-screen z-40">
      <Sidebar />
    </div>
    <div class="flex flex-1 flex-col">
      <div class="sticky top-0 z-40">
        <Header />
      </div>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Provider from '@/components/provider/provider.vue'
</script>
