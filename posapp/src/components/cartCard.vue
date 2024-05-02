<template>
  <div>
    <div class="flex items-start justify-between gap-3">
      <div class="flex items-start gap-2">
        <div
          v-if="$props.item.image"
          class="w-16 h-16 flex shrink-0 relative items-center justify-center p-2 rounded-md border bg-white"
        >
          <img :src="$props.item.image" :alt="$props.item.title" class="h-14" />
          <Button
            @click="removeAllById(item)"
            size="icon"
            class="rounded-full absolute -top-2 -right-2 w-5 h-5"
            ><X class="w-3 h-3"
          /></Button>
        </div>
        <div class="flex-1" v-if="$props.item.title">
          <h1>{{ props.item.title }}</h1>
        </div>
      </div>
      <div class="flex flex-col items-center gap-2">
        <b>${{ props.total }}</b>
        <Qty :item="item" />
      </div>
    </div>
    <Separator class="my-3" />
  </div>
</template>
<script lang="ts" setup>
import { useCartStore } from "@/hook/store";
import { Button } from "@/components/ui/button";
import { X } from "lucide-vue-next";
import { Separator } from "@/components/ui/separator";
import Qty from "@/components/qty.vue";

const { removeAllById } = useCartStore((state) => state);

const props = defineProps<{
  item: any;
  total: any;
}>();
</script>
