<script setup lang="ts">
import { LayoutGrid, ScrollText } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import Logo from '@/assets/logo.png'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useRoute } from 'vue-router';

const route = useRoute();

</script>
<template>
  <aside class="inset-y h-full flex-col border-r">
    <div class="border-b p-2">
      <Button variant="outline" size="icon" aria-label="Home">
        <img :src="Logo" alt="logo" class="w-7" />
      </Button>
    </div>
    <nav class="grid gap-1 p-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
            @click="$router.push('/')"
              :variant="$route.name == 'Home' ? 'default' : 'ghost'"
              size="icon"
              class="rounded-lg"
              aria-label="Documentation"
            >
              <LayoutGrid class="size-5" />
            </Button> 
            <!-- <router-link :to="{ name: 'RecentSales' }" >
              <Button
                :variant="$route.name == 'Recent Sales' ? 'default' : 'ghost'"
                size="icon"
                class="rounded-lg"
                aria-label="Documentation"
              >
                <ScrollText class="size-5" />
              </Button>
            </router-link> -->
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{{ $route.name }}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
    <nav class="mt-auto grid gap-1 p-2"></nav>
  </aside>
</template>
