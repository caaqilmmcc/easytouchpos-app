export type ProductType = {
  name: string
  item_name: string
  description?: string
  stock_uom: string
  image?: string
  is_stock_item: number
  has_variants: number
  variant_of?: string
  item_group: string
  idx: number
  has_batch_no: number
  has_serial_no: number
  max_discount: number
  brand?: string
}
export type ItemGroup={
    name: string
    item_group_name?: string
}