<script setup lang="ts">
import { Check, ChevronsUpDown } from "lucide-vue-next";

import { ref } from "vue";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Customers = [
  { value: "Mohamed Mohamoud", label: "Mohamed Mohamoud" },
  { value: "Ali Ahmed Osman", label: "Ali Ahmed Osman" },
];

const open = ref(false);
const value = ref("");
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
            ? Customers.find((Customer) => Customer.value === value)?.label
            : "Select Customer..."
        }}

        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-full p-0">
      <Command v-model="value">
        <CommandInput placeholder="Search Customer..." />
        <CommandEmpty>No Customer found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="Customer in Customers"
              :key="Customer.value"
              :value="Customer"
              @select="open = false"
            >
              <Check
                :class="
                  cn(
                    'mr-2 h-4 w-4',
                    value === Customer.value ? 'opacity-100' : 'opacity-0'
                  )
                "
              />
              {{ Customer.label }}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
