<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const props = defineProps<{
  title: string;
}>();

</script>

<template>
  <Sheet>
    <SheetTrigger >
     <slot name="btnTrigger"/>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>{{ props.title }}</SheetTitle>
      </SheetHeader>
      <div class="my-4">
        <slot />
      </div>
    </SheetContent>
  </Sheet>
</template>
