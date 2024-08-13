import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { SERVER_URL } from "../utils/helpers"

export const fetchCartItem = async () => {
  const res = await axios.get(`${SERVER_URL}/cart`, {
    withCredentials: true,
  })

  return res.data
}

export const useCartItemsData = () => {
  return useQuery({
    queryKey: ["cartItem"],
    queryFn: fetchCartItem,
  })
}
