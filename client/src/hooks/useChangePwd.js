import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { SERVER_URL } from "../utils/helpers"
import { toast } from "react-toastify"

const changePwd = async (data) => {
  const res = await axios.post(`${SERVER_URL}/member/changePassword`, data, {
    withCredentials: true,
  })

  return res.data
}

export const useChangePwd = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: changePwd,
    onSuccess: (data) => {
      toast(data.message)
      // queryClient.invalidateQueries(["cartItem"])
      // console.log("成功刪除商品")
    },
    onError: (error) => {
      toast.error(error.response.data.error)
    },
  })
}
