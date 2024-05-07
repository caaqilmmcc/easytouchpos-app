<template>
  <Modal
    width="w-[768px]"
    title="Closing POS Shift"
    :open="isOpen && modalType == 'CloseShiftModal'"
    :onClose="
      () => {
        onClose()
      }
    "
  >
    <div class="w-full space-y-3 flex flex-col items-end">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Mode of payment</TableHead>
            <TableHead>Opening Amount</TableHead>
            <TableHead>Closing Amount</TableHead>
            <TableHead>Expected Amount</TableHead>
            <TableHead>Difference</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            v-for="(item, index) in closeShiftPayments.payment_reconciliation"
            :key="index"
          >
            <TableCell>{{ item.mode_of_payment }}</TableCell>
            <TableCell>${{ item.opening_amount }}</TableCell>
            <TableCell>${{ item.closing_amount }}</TableCell>
            <TableCell>${{ item.expected_amount }}</TableCell>
            <TableCell>${{ item.difference }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button @click="handleSubmit(closeShiftPayments)">Submit</Button>
    </div>
  </Modal>
</template>
<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Modal from '@/components/modal.vue'
import { useModalSheet } from '@/hook/store'
import { ref } from 'vue'
import axios from 'axios'
import { currentUser } from '@/hook/currentUser'
import { getOpeningShit } from '@/hook/getOpenShift'
import { useRoute, useRouter } from 'vue-router'
const router =useRouter()
const closeShiftPayments = ref([])
const { isOpen, modalType, onClose } = useModalSheet((state) => state)

const makeClosingShiftFromOpening = async () => {
  const data = await getOpeningShit(`${currentUser()}`)

  const response = await axios.post(
    '/api/method/posawesome.posawesome.doctype.pos_closing_shift.pos_closing_shift.make_closing_shift_from_opening',
    {
      opening_shift: JSON.stringify(data.message['pos_opening_shift']),
    }
  )
  closeShiftPayments.value = response.data.message
}
makeClosingShiftFromOpening()
const handleSubmit = async (shift: any) => {
  axios
    .post(
      '/api/method/posawesome.posawesome.doctype.pos_closing_shift.pos_closing_shift.submit_closing_shift',
      {
        closing_shift: JSON.stringify(shift),
      }
    )
    .then((response: any) => router.go(0))
}

</script>
