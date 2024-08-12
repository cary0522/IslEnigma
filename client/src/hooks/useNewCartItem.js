import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { SERVER_URL } from "../utils/helpers"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const newCartItem = async (data) => {
  console.log(data)
  try {
    const res = await axios.post(`${SERVER_URL}/cart/new_cart_item`, data, {
      withCredentials: true,
    })

    return res.data
  } catch (err) {
    throw err
  }
}

export const useNewCartItem = () => {
  return useMutation({
    mutationFn: newCartItem,
    onSuccess: (data) => {
      toast(data)
    },
    onError: (error) => {
      const errMsg = error.response?.data || "發生錯誤!"
      console.log(errMsg)
      toast.error(errMsg)
    },
  })
}
