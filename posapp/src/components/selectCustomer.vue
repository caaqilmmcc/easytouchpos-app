<script setup lang="ts">
import { Check, ChevronsUpDown } from 'lucide-vue-next'

import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import axios from 'axios'
import { getOpeningShit } from '@/hook/getOpenShift'
import { currentUser } from '@/hook/currentUser'

const Customers = ref([])
const getCustomerData = async () => {
  const data = await getOpeningShit(`${currentUser()}`)
  await axios
    .post(
      '/api/method/easytouchpos.easytouchpos.api.posapp.get_customer_names',
      {
        pos_profile: JSON.stringify(data.message['pos_profile']),
      }
    )
    .then((response) => (Customers.value = response.data.message))
}
console.log('hello')
getCustomerData()

const open = ref(false)
const value = ref('')
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="w-full justify-between"
      >
        {{
          value
            ? Customers.find((Customer: any) => Customer.name === value)
                ?.customer_name
            : 'Select Customer...'
        }}

        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-80 p-0">
      <Command v-model="value">
        <CommandInput placeholder="Search Customer..." />
        <CommandEmpty>No Customer found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="Customer in Customers as any"
              :key="Customer.name"
              :value="Customer.name"
              @select="open = false"
            >
              <Check
                :class="
                  cn(
                    'mr-2 h-4 w-4',
                    value === Customer.name ? 'opacity-100' : 'opacity-0'
                  )
                "
              />
              {{ Customer.customer_name }}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
