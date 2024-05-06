<script setup lang="ts">
import { computed, ref } from 'vue'
import axios from 'axios'
import Product from '@/components/product.vue'
import { useCategory } from '@/hook/store'
import { getOpeningShit } from '@/hook/getOpenShift'
import { currentUser } from '@/hook/currentUser'

const { isSelectedCategory } = useCategory((state) => state)
const products = ref<any[]>([])

const productList = async () => {
  // const response = await axios.get("https://fakestoreapi.com/products");

  const data = await getOpeningShit(`${currentUser()}`)
  const response = await axios.post(
    '/api/method/posawesome.posawesome.api.posapp.get_items',
    {
      pos_profile: JSON.stringify(data.message['pos_profile']),
      price_list: '',
      item_group: '',
      search_value: '',
    }
  )
  products.value = response.data.message
}
productList()

// Compute filtered products based on the selected category
const filteredProducts = computed(() => {
  return products.value.filter(
    (product) => product.item_group === isSelectedCategory.value
  )
})
</script>

<template>
  <div
    class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 overflow-scroll 2xl:grid-cols-6 gap-2">
    <div v-for="(item, index) in filteredProducts" :key="index">
      <Product :product="item" />

    
    </div>
    <!-- <div v-for="(product, index) in filteredProducts" :key="index">
      <Product :product="product" />
    </div> -->
  </div>
</template>
