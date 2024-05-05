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
interface SelectPosProfileProps {
  selectPosProfile: string
  onSelectedPosProfile: (name: string) => void
}
export const useSelectPosProfile = create<SelectPosProfileProps>((set) => ({
  selectPosProfile: 'akram',
  onSelectedPosProfile: (name) => set({ selectPosProfile: name }),
}))

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
  isOpen: false,
  modalType: '',
  onOpen: (name) => set({ isOpen: true, modalType:name }),
  onClose: () => set({ isOpen: false, modalType: '' }),
}))

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product: Product) => {
        set((state) => ({
          cart: [...state.cart, product],
        }))
      },
      removeFromCart: (product: Product) => {
        const productToRemove = get().cart.findIndex((p) => p.id === product.id)
        set((state) => {
          const newCart = [...state.cart]
          newCart.splice(productToRemove, 1)
          return { cart: newCart }
        })
      },
      removeAllById: (product: Product) => {
        set((state) => {
          const newCart = state.cart.filter((c) => c.id != product.id)
          return { cart: newCart }
        })
      },
    }),
    {
      name: 'Shopping cart store',
    }
  )
)
