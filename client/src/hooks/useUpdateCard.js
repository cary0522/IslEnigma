import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { SERVER_URL } from "../utils/helpers"
import { toast } from "react-toastify"

const updateCard = async (data) => {
  const res = await axios.post(`${SERVER_URL}/member/payMethod`, data, {
    withCredentials: true,
  })

  return res.data
}

export const useUpdateCard = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateCard,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["CardInfo"])
      toast(data.message)
    },
    onError: (error) => {
      console.error(error)
    },
  })
}
