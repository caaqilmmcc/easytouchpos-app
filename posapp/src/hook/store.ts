import { Product } from '@/components/product.vue'
import create from 'vue-zustand'
import { persist } from 'zustand/middleware'
interface CategoryState {
  isSelectedCategory: string
  setSelectedCategory: (category?: string) => void
}
interface ModalState {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}
interface ModalSheetState {
  isOpen: boolean
  modalType: string
  onOpen: (name: string) => void
  onClose: () => void
}
interface CartState {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (product: Product) => void
  removeAllById: (product: Product) => void
}
interface OpenShiftState {
  openShift: string
  setOpenShift: (shift: string) => void
}
export const useCategory = create<CategoryState>((set) => ({
  isSelectedCategory: 'ALL',
  setSelectedCategory: (category = 'ALL') =>
    set({ isSelectedCategory: category }),
}))

export const useModal = create<ModalState>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export const useModalSheet = create<ModalSheetState>((set) => ({
  isOpen: true,
  modalType: '',
  onOpen: (name) => set({ isOpen: true, modalType: name }),
  onClose: () => set({ isOpen: false, modalType: '' }),
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
        const productToRemove = get().cart.findIndex((p:any) => p.item_code === product.item_code)
        set((state) => {
          const newCart = [...state.cart]
          newCart.splice(productToRemove, 1)
          return { cart: newCart }
        })
      },
      removeAllById: (product: any) => {
        set((state) => {
          const newCart = state.cart.filter((c) => c.item_code != product.item_code)
          return { cart: newCart }
        })
      },
    }),
    {
      name: 'Shopping cart store',
    }
  )
)

// const useOpenShifStore = create((set) => ({
//   openShift: {},
//   setOpenShift: async (user) => {
//     const response = await fetch(pond)
//     set({ openShift: await response.data.messate })
//   },
// }))

// export const useOpenShifStore = create<OpenShiftState>((set) => ({
//   openShift: "",
//   setOpenShift: (shift) => set({ openShift: shift }),
// }))
