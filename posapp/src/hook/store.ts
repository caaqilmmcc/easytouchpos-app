import { Product } from "@/components/product.vue";
import create from "vue-zustand";
import { persist } from "zustand/middleware";
interface CategoryState {
  isSelectedCategory: string;
  setSelectedCategory: (category?: string) => void;
}
interface ModalState {
  isOpen: boolean;
  modalType: string;
  onOpen: (modalType: string) => void;
  onClose: () => void;
}
interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  removeAllById: (product: Product) => void;
}

export const useCategory = create<CategoryState>((set) => ({
  isSelectedCategory: "ALL",
  setSelectedCategory: (category = "ALL") =>
    set({ isSelectedCategory: category }),
}));

export const useModal = create<ModalState>((set) => ({
  isOpen: false,
  modalType: "",
  onOpen: (modalType) => set({ isOpen: true, modalType }),
  onClose: () => set({ isOpen: false, modalType: "" }),
}));

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product: Product) => {
        set((state) => ({
          cart: [...state.cart, product],
        }));
      },
      removeFromCart: (product: Product) => {
        const productToRemove = get().cart.findIndex(
          (p) => p.id === product.id
        );
        set((state) => {
          const newCart = [...state.cart];
          newCart.splice(productToRemove, 1);
          return { cart: newCart };
        });
      },
      removeAllById: (product: Product) => {
        set((state) => {
          const newCart = state.cart.filter((c) => c.id != product.id);
          return { cart: newCart };
        });
      },
    }),
    {
      name: "Shopping cart store",
    }
  )
);
