<template>
  <Card class="overflow-hidden">
    <CardHeader
      className="flex px-4 py-2 items-center justify-between bg-muted"
    >
      <div>
        <CardTitle className="group flex items-center gap-2 text-lg">
          {{$props.title}}
        </CardTitle>
        <CardDescription>{{$props.id}}</CardDescription>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost">
              <MoreVertical className="h-2 w-2" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Approved</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </CardHeader>
    <CardContent className="px-4 py-1">
      <div className="grid gap-2">
        <div className="font-semibold">Order Details</div>
        <ul className="grid gap-1.5">
          <li v-if="$props.customer" className="flex items-center justify-between">
            <span className="text-muted-foreground">Customer</span>
            <span>{{$props.customer}}</span>
          </li>
          <li v-if="$props.no" className="flex items-center justify-between">
            <span className="text-muted-foreground">No</span>
            <span>{{$props.no}}</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">Userby</span>
            <span>{{$props.userBy}}</span>
          </li>
          <li v-if="$props.items" className="flex items-center justify-between">
            <span className="text-muted-foreground">Items</span>
            <span>{{$props.items}}</span>
          </li>
          <li v-if="$props.piad" className="flex items-center justify-between">
            <span className="text-muted-foreground">Piad</span>
            <span>${{$props.piad}}</span>
          </li>
          <li v-if="$props.dua>=0" className="flex items-center justify-between">
            <span className="text-muted-foreground">Dua</span>
            <span>${{$props.dua}}</span>
          </li>
          <li v-if="$props.total"  className="flex items-center justify-between font-semibold">
            <span className="text-muted-foreground">Total</span>
            <span>${{$props.total}}</span>
          </li>
        </ul>
      </div>
    </CardContent>
  </Card>
</template>
<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { MoreVertical } from 'lucide-vue-next'

const Props = defineProps<{
  title: string
  id: string
  userBy: string
  items?: number
  dua?: number
  piad?: number
  customer?: string
  no?: string
  total?: number
}>()
</script>
