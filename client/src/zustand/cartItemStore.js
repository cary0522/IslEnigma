import { create } from "zustand"

export const useCartItemStore = create((set) => ({
  cartItems: [],

  setCartItems: (items) => set({ cartItems: items }),
}))
