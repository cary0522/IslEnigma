import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { SERVER_URL } from "../utils/helpers"
import { toast } from "react-toastify"

const deleteCard = async (cardId) => {
  const res = await axios.delete(`${SERVER_URL}/member/payMethod`, {
    data: { cardId },
    withCredentials: true,
  })
  return res.data
}

export const useDeleteCard = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteCard,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["cardInfo"])

      toast(data.message)
    },
    onError: (error) => {
      console.error(error)
    },
  })
}
