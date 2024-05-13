import { Product } from '@/components/product.vue'
import create from 'vue-zustand'
import { persist } from 'zustand/middleware'
interface CategoryState {
  isSelectedCategory: string
  subCategory?: string[]
  isSelectedSubCategory?: string
  setSelectedCategory: (
    category?: string,
    isSelectedSubCategory?: string,
    subCategory?: string[]
  ) => void
}
interface ModalState {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}
interface ModalSheetState {
  isOpen: boolean
  modalType: string
  data?: any
  onOpen: (name: string, dt?: any) => void
  onClose: () => void
}
interface CartState {
  cart: Product[]
  addToCart: (product: any) => void
  removeFromCart: (product: any) => void
  removeAllById: (product: any) => void
}
interface OpenShiftState {
  openShift: string
  setOpenShift: (shift: string) => void
}
export const useCategory = create<CategoryState>((set) => ({
  isSelectedCategory: 'Demo Item Group',
  subCategory: [
    'chicken',
    'beef',
    'vegetarian',
    'supreme',
    'soda',
    'juice',
    'tea',
    'coffee',
    'smoothie',
    'cake',
    'ice_cream',
    'pie',
    'pudding',
    'cookies',
    'chips',
   
  ],
  isSelectedSubCategory: '',
  setSelectedCategory: (
    category = 'Demo Item Group',
    isSelectedSubCategory,
    subCategory
  ) =>
    set({ isSelectedCategory: category, subCategory, isSelectedSubCategory }),
}))

export const useModal = create<ModalState>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export const useModalSheet = create<ModalSheetState>((set) => ({
  isOpen: false,
  modalType: '',
  data: {},
  onOpen: (name, dt) => set({ isOpen: true, modalType: name, data: dt }),
  onClose: () => set({ isOpen: false, modalType: '', data: {} }),
}))

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product: any) => {
        set((state) => ({
          cart: [...state.cart, product],
        }))
      },
      removeFromCart: (product: any) => {
        const productToRemove = get().cart.findIndex(
          (p: any) => p.item_code === product.item_code
        )
        set((state) => {
          const newCart = [...state.cart]
          newCart.splice(productToRemove, 1)
          return { cart: newCart }
        })
      },
      removeAllById: (product: any) => {
        set((state) => {
          const newCart = state.cart.filter(
            (c) => c.item_code != product.item_code
          )
          return { cart: newCart }
        })
      },
    }),
    {
      name: 'Shopping cart store',
    }
  )
)
