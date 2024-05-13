<template>
  <Modal
    width="w-[768px]"
    :open="isOpen && modalType == 'ItemDetailModal'"
    :onClose="
      () => {
        activeAddOn=[AddOn[0].label]
        onClose()
      }
    "
  >
    <div class="w-full space-y-3 flex gap-4">
      <div
        class="bg-gray-400 overflow-hidden p-8 relative rounded-xl h-96 flex-1"
      >
        <img
          :src="data.image"
          :alt="data.item_name"
          class="inset-0 absolute object-cover w-full h-full"
        />
      </div>
      <div class="flex-1 flex items-end flex-col justify-between">
        <div class="w-full space-y-3">
          <div class="space-y-1">
            <CardTitle>{{ data.item_name }}</CardTitle>
            <CardDescription>{{ data.description }}</CardDescription>
          </div>
          <Separator />
          <div class="space-y-1">
            <b> Size: </b>
            <RadioGroup
              :default-value="activeSize"
              class="grid grid-cols-3 gap-2"
            >
              <div v-for="(item, index) in Size" :key="index">
                <RadioGroupItem
                  :id="item.label"
                  :value="item.label"
                  class="peer sr-only"
                />
                <Label
                  @click="activeSize = item.label"
                  :for="item.label"
                  :class="` flex flex-col cursor-pointer gap-0.5 items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground ${
                    activeSize == item.label && 'border-primary'
                  }`"
                >
                  <span>
                    {{ item.label }}
                  </span>
                  <span>
                    {{ item.value }}
                  </span>
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div class="space-y-1">
            <b> Add On: </b>
            <div class="flex flex-wrap gap-2">
              <div v-for="(item, index) in AddOn" :key="index">
                <Checkbox
                  :checked="activeAddOn.includes(item.label)"
                  class="peer sr-only"
                />
                <Label
                  @click="handleAddOne(item.label)"
                  :for="item.label"
                  :class="` flex  flex-col cursor-pointer gap-0.5 items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground ${
                    activeAddOn.includes(item.label) && 'border-primary'
                  }`"
                >
                  <span>
                    {{ item.label }}
                  </span>
                  <span>
                    {{ item.value }}
                  </span>
                </Label>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex w-full border-t pt-3 justify-between items-center gap-1.5"
        >
          <b class="text-xl">${{findeModalItemData?? data.rate }}</b>
          <div>
            <Qty v-if="isProductInCart(data)" :item="data" />
            <Button
              v-if="!isProductInCart(data)"
              @click="
                addToCart({ ...data, size: activeSize, addMore: activeAddOn })
              "
            >
              <Plus class="w-4 h-4 mr-2" /> Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>
<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import Modal from '@/components/modal.vue'
import { useModalSheet } from '@/hook/store'
import { Plus } from 'lucide-vue-next'
import CardTitle from '../ui/card/CardTitle.vue'
import CardDescription from '../ui/card/CardDescription.vue'
import { useCartStore } from '@/hook/store'
import Qty from '@/components/qty.vue'
import { getCartTotal } from '@/hook/getCartTotal'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { cartGroupById } from '@/hook/cartGroupById'
import { computed, ref } from 'vue'
import Separator from '../ui/separator/Separator.vue'

const Size = ref([
  {
    label: 'Small',
    value: '+0.00',
  },
  {
    label: 'Medium',
    value: '+1.50',
  },
  {
    label: 'Large',
    value: '+3.00',
  },
])
const activeSize = ref(Size.value[0].label)
const AddOn = ref([
  {
    label: 'More BBQ sos',
    value: '+0.00',
  },
  {
    label: 'Extra french fries',
    value: '+3.00',
  },
  {
    label: 'Mushroom soup',
    value: '+1.50',
  },
  {
    label: 'Lemon Juice (set)',
    value: '+0.00',
  },
])
const activeAddOn = ref([AddOn.value[0].label])

const handleAddOne = (data: string) => {
  activeAddOn.value.includes(data)
    ? activeAddOn.value.splice(activeAddOn.value.indexOf(data), 1)
    : activeAddOn.value.push(data)
}
const { addToCart, cart } = useCartStore((state) => state)
const { isOpen, onClose, modalType, data } = useModalSheet((state) => state)

const isProductInCart = (product: any) => {
  return cart.value.some((item: any) => item.item_code === product.item_code)
}


const groupBy = computed(() => cartGroupById(cart.value))
// const findeModalItemData = computed(() => {
//   if (groupBy.value[data.value.item_code]) {
//     return getCartTotal(data.value.item_code)
//   } else {
//     return null
//   }
// })


</script>
