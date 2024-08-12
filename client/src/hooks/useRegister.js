import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { SERVER_URL } from "../utils/helpers"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const register = async (memberData) => {
  try {
    const res = await axios.post(`${SERVER_URL}/member/register`, memberData)
    return res.data
  } catch (err) {
    throw err
  }
}
export const useRegister = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      const successMsg = data.message
      console.log(successMsg)
      toast(successMsg)
      navigate("/login")
    },
    onError: (error) => {
      const errMsg = error.response?.data?.error || "發生錯誤!"
      console.log(errMsg)
      toast.error(errMsg)
    },
  })
}
