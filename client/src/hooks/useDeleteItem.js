import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { SERVER_URL } from "../utils/helpers"

const removeCartItem = async (itemId) => {
  await axios.delete(`${SERVER_URL}/cart/${itemId}`)
  return itemId
}

export const useRemoveCartItem = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: removeCartItem,
    onSuccess: (itemId) => {
      queryClient.invalidateQueries(["cartItem"])
    },
    onError: (error) => {
      console.error("Failed to remove item:", error)
    },
  })
}
