import { create } from "zustand"
import axios from "axios"

const useCartStore = create((set) => ({
  cartItems: [],
  loading: true,
  fetchCartData: async () => {
    try {
      const response = await axios.get("http://localhost:3001/cart")
      set({
        cartItems: response.data.order_item,
        loading: false,
      })
    } catch (error) {
      console.error("Error fetching shopping cart data:", error)
      set({ loading: false })
    }
  },
  setCartItems: (updatedItem) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === updatedItem.order_item_id ? updatedItem : item
      ),
    })),
}))
export default useCartStore
