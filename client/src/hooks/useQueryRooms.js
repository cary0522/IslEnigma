import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { SERVER_URL } from "../utils/helpers"

const queryRooms = async (data) => {
  const res = await axios.post(`${SERVER_URL}/rooms`, data)
  return res.data
}

export const useQueryRooms = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: queryRooms,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["rooms"])
    },
    onError: (error) => {
      console.error("Failed to add item:", error)
    },
  })
}
