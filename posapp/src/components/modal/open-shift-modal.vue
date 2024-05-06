<template>
  <div>
    <Modal
      :open="isShift"
      title="Create POS Opening Shift"
      :onClose="() => $router.push('/')"
    >
      <form :onSubmit="onSubmit" class="w-full space-y-3">
        <FormField
          v-slot="{ componentField }"
          name="company"
          v-for="(shift, index) in openShift"
          :key="index"
        >
          <FormItem>
            <FormLabel>Company</FormLabel>
            <Select v-bind="componentField">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a verified company" />
                </SelectTrigger>
              </FormControl>
              <SelectContent class="max-w-full w-[462px]">
                <SelectGroup>
                  <SelectItem
                    :value="company.name"
                    v-for="(company, index) in shift.companies"
                    :key="index"
                  >
                    {{ company.name }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField
          name="POSProfile"
          v-for="(shift, index) in openShift"
          :key="index"
        >
          <FormItem class="flex flex-col">
            <FormLabel>Pos Profile</FormLabel>
            <Popover v-model:open="open">
              <PopoverTrigger as-child>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    :class="
                      cn(
                        'w-full justify-between',
                        !values.POSProfile && 'text-muted-foreground'
                      )
                    "
                  >
                    {{
                      values.POSProfile
                        ? shift.pos_profiles_data.find(
                            (posProfile: any) =>
                              posProfile.name === values.POSProfile
                          )?.name
                        : 'Select pos profile...'
                    }}
                    <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent class="w-[462px] p-0">
                <Command>
                  <CommandInput placeholder="Search pos profile..." />
                  <CommandEmpty>Nothing found.</CommandEmpty>
                  <CommandList>
                    <CommandGroup>
                      <CommandItem
                        :value="posProfile.name"
                        v-for="(posProfile, index) in shift.pos_profiles_data"
                        :key="index"
                        @select="
                          () => {
                            setValues({
                              POSProfile: posProfile.name,
                            }),
                              (open = false),
                              paymentMethod()
                          }
                        "
                      >
                        <Check
                          :class="
                            cn(
                              'mr-2 h-4 w-4',
                              posProfile.name === values.POSProfile
                                ? 'opacity-100'
                                : 'opacity-0'
                            )
                          "
                        />
                        {{ posProfile.name }}
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        </FormField>
        <Card name="company">
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead> Mode Of Payment </TableHead>
                  <TableHead class="text-right"> Opening Amount </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow
                  v-if="values.POSProfile"
                  v-for="(paymentMethod, index) in paymentMethodList"
                  :key="index"
                >
                  <TableCell class="font-medium py-2">
                    {{ paymentMethod.mode_of_payment }}
                  </TableCell>
                  <TableCell class="flex items-center py-2 justify-end">
                    <div class="relative items-center">
                      <Input
                        id="search"
                        type="text"
                        placeholder="0.00"
                        class="pl-10 w-24"
                        @input="(event:any) =>{
                      handleAmoutInput(event.target.value, index)}"
                      />
                      <span
                        class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
                      >
                        <DollarSign class="w-4 h-4 text-muted-foreground" />
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <div class="text-right">
          <br />
          <Button type="submit" class="w-full"> Submit </Button>
        </div>
      </form>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import Modal from '@/components/modal.vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { Card, CardContent } from '@/components/ui/card'

import * as z from 'zod'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { ref } from 'vue'
import { currentUser } from '@/hook/currentUser'
import { cn } from '@/lib/utils'
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
import { DollarSign } from 'lucide-vue-next'
const open = ref(false)
const openShift = ref<any>([])
const isShift = ref(true)


const formSchema = toTypedSchema(
  z.object({
    company: z.string({ required_error: 'Please select an company.' }).min(1),
    POSProfile: z
      .string({ required_error: 'Please select an Pos Profile.' })
      .min(1),
  })
)
const { handleSubmit, values, setValues } = useForm({
  validationSchema: formSchema,
})

const openinDialogList = async () => {
  const response = await axios.get(
    '/api/method/posawesome.posawesome.api.posapp.get_opening_dialog_data'
  )
  openShift.value = response.data
}
openinDialogList()

const CheckOpeninDialogList = async () => {
  await axios
    .get('/api/method/posawesome.posawesome.api.posapp.check_opening_shift', {
      params: { user: currentUser() },
    })
    .then((response) => {
      if (response.data.message) {
        isShift.value = false
      }
    })
}
CheckOpeninDialogList()

const paymentMethodList = ref([
  { mode_of_payment: '', currency: '', amount: 0 },
])

const paymentMethod = () => {
  if (values.POSProfile) {
    paymentMethodList.value = []
    openShift.value.message.payments_method.forEach((data: any) => {
      if (values.POSProfile === data.parent) {
        paymentMethodList.value.push({
          mode_of_payment: data.mode_of_payment,
          currency: data.currency,
          amount: 0,
        })
      }
    })
  }
}
paymentMethod()
const handleAmoutInput = (event: any, index: number) => {
  paymentMethodList.value[index].amount = event
}
const onSubmit = handleSubmit(async (values) => {
  await axios
    .post(
      '/api/method/posawesome.posawesome.api.posapp.create_opening_voucher',
      {
        pos_profile: values.POSProfile,
        company: values.company,
        balance_details: JSON.stringify(paymentMethodList.value),
      }
    )
    .then(() => {
      CheckOpeninDialogList()})
})
</script>
