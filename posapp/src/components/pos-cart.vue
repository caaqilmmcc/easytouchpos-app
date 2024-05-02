<template>
  <fieldset class="flex flex-col flex-1 rounded-lg border overflow-scroll p-4">
    <legend class="text-sm font-medium">Order Summary</legend>
    <CartCard v-for="(id, index) in Object.keys(groupBy)" :key="index" :item="groupBy[id][0]" :total="getCartTotal(groupBy[id])" />
  </fieldset>
</template>

<script lang="ts" setup>
import { useCartStore } from "@/hook/store";
import { cartGroupById } from "@/hook/cartGroupById";
import { getCartTotal } from "@/hook/getCartTotal";
import CartCard from "@/components/cartCard.vue";
import { computed,  } from "vue";



const { cart } = useCartStore((state) => state);
const groupBy = computed(()=>cartGroupById(cart.value));



// Object.keys(groupBy).map((id) => {
//   item.value=groupBy[id][0]
//   total.value=getCartTotal(groupBy[id]);
//   return(
//     <div :key="id">
//       item.value.image[0]&&(

//         <img :src="item.value.image[0]" :alt="item.value.title[0]" class="h-14" />
//       )

//       </div>
//   )
// });
</script>
