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
                    :value="company['name']"
                    v-for="(company, index) in shift['companies']"
                    :key="index"
                  >
                    {{ company['name'] }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField
          v-slot="{ componentField }"
          name="POSProfile"
          v-for="(shift, index) in openShift"
          :key="index"
        >
          <FormItem>
            <FormLabel>POS Profile</FormLabel>
            <Select v-bind="componentField">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a verified pos profile" />
                </SelectTrigger>
              </FormControl>
              <SelectContent class="max-w-full w-[462px]">
                <SelectGroup>
                  <SelectItem
                    :value="posProfile['name']"
                    v-for="(posProfile, index) in shift['pos_profiles_data']"
                    :key="index"
                  >
                    {{ posProfile['name'] }}</SelectItem
                  >
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        </FormField>

        <Card name="company" v-for="(shift, index) in openShift" :key="index">
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead> Mode Of Payment </TableHead>

                  <TableHead class="text-right"> Opening Amount </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody> </TableBody>
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
import {  ref } from 'vue'
import { currentUser } from '@/hook/currentUser'

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
const { handleSubmit } = useForm({
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

const onSubmit = handleSubmit(async (values) => {
  console.log('🇲🇦', values)
  await axios
    .post(
      '/api/method/posawesome.posawesome.api.posapp.create_opening_voucher',
      {
        pos_profile: values.POSProfile,
        company: values.company,
        balance_details:
          '[{"mode_of_payment":"Cash","amount":0,"currency":"USD"}]',
      }
    )
    .then((response) => console.log('🇸🇴', response))
})
</script>
