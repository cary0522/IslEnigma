import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { SERVER_URL } from "../utils/helpers"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const login = async (memberData) => {
  try {
    const res = await axios.post(`${SERVER_URL}/member/login`, memberData, {
      withCredentials: true,
    })

    return res.data
  } catch (err) {
    throw err
  }
}

export const useLogin = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const { message, member } = data
      toast(message)
      localStorage.setItem("member", JSON.stringify(member))
      navigate("/rooms")
    },
    onError: (error) => {
      const errMsg = error.response?.data?.error || "發生錯誤!"
      console.log(errMsg)
      toast.error(errMsg)
    },
  })
}
