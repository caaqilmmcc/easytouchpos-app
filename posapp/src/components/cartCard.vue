<template>
  <div>
    <div class="flex items-start justify-between gap-3">
      <div class="flex items-start gap-3">
        <div
          v-if="$props.item.image"
          class="w-16 h-16 flex shrink-0 relative items-center justify-center p-2 rounded-md border bg-white"
        >
          <img
            :src="$props.item.image"
            :alt="$props.item.item_name"
            class="h-14"
          />
          <Button
            @click="removeAllById(item)"
            size="icon"
            class="rounded-full absolute -top-2 -right-2 w-5 h-5"
            ><X class="w-3 h-3"
          /></Button>
        </div>
        <div class="flex-1 flex flex-col" v-if="$props.item.item_name">
          <b>{{ props.item.item_name }}</b>
          <small v-if="props.item.size">Size: <b>{{ props.item.size }}</b></small>
          <div
            v-if="props.item.addMore"
            class="flex items-center gap-0.5 flex-wrap"
          >
            <small v-for="(item, index) in props.item.addMore" :key="index"
              >{{ item }},</small
            >
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center gap-1.5">
        <b>${{ props.total }}</b>
        <Qty :item="item" />
      </div>
    </div>
    <Separator class="my-3" />
  </div>
</template>
<script lang="ts" setup>
import { useCartStore } from '@/hook/store'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-vue-next'
import { Separator } from '@/components/ui/separator'
import Qty from '@/components/qty.vue'

const { removeAllById } = useCartStore((state) => state)

const props = defineProps<{
  item: any
  total: any
}>()
</script>
