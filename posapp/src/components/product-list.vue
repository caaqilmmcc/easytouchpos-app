<script setup lang="ts">
import { computed, ref } from "vue";
import axios from "axios";
import Product from "@/components/product.vue";
import { Product as ProductType } from "@/components/product.vue";
import { useCategory } from "@/hook/store";
const { isSelectedCategory } = useCategory((state) => state);
const products = ref<ProductType[]>([]);

const productList = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  products.value = response.data;
};
productList();
// Compute filtered products based on the selected category
const filteredProducts = computed(() => {
  if (isSelectedCategory.value === "ALL") return products.value; // If no category selected, return all products
  return products.value.filter(
    (product) => product.category === isSelectedCategory.value
  );
});
</script>

<template>
  <div class="grid md:grid-cols-3 lg:grid-cols-4 overflow-scroll xl:grid-cols-6 gap-2">
    <div v-for="(product, index) in filteredProducts" :key="index">
      <Product :product="product" />
    </div>
  </div>
</template>
