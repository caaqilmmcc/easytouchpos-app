<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { ref } from "vue";
import axios from "axios";
import productList from "@/components/product-list.vue";
import { useCategory } from "@/hook/store";
import {frappe} from "@/frappe/frappe.js"
import { ItemGroup } from "@/types/types";
const { setSelectedCategory, isSelectedCategory } = useCategory(
  (state) => state
);

const AllCategories = ref<ItemGroup[]>([]);

const product_categories = async () => {
  const response = await frappe.FindMany({doctype:"Item Group", fields:["name", "item_group_name"]})
  AllCategories.value = response;
};
product_categories();
</script>

<template>
  <div
    class="relative space-y-3 flex h-full  flex-col rounded-xl bg-muted/50 p-4 flex-[2] 2xl:flex-[3]"
  >
    <h1 class="text-2xl font-semibold">Products</h1>
    <div class="flex flex-wrap gap-2">
   
      <Badge
        :variant="isSelectedCategory === category.name ? 'default' : 'outline'"
        @click="
          isSelectedCategory === category.name
            ? setSelectedCategory()
            : setSelectedCategory(category.name)
        "
        class="capitalize cursor-pointer"
        v-for="(category, index) in AllCategories.data" :key="index"
        >{{ category.item_group_name }}</Badge
      >
    </div>
    <div class="py-4 ">
      <productList />
    </div>
  </div>
</template>
