import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { SERVER_URL } from "../utils/helpers"

const removeCartItem = async (itemId) => {
  const res = await axios.delete(`${SERVER_URL}/cart/${itemId}`)

  return res.data
}

export const useRemoveCartItem = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: removeCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries(["cartItem"])
    },
    onError: (error) => {
      console.error(error)
    },
  })
}
