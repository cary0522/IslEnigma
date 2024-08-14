import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { SERVER_URL } from "../utils/helpers"

export const fetchProfileOrders = async () => {
  const res = await axios.get(`${SERVER_URL}/member/order`, {
    withCredentials: true,
  })
  return res.data
}

export const useProfileOrders = () => {
  return useQuery({
    queryKey: ["Orders"],
    queryFn: fetchProfileOrders,
  })
}
