import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { SERVER_URL } from "../utils/helpers"

export const fetchCardInfo = async () => {
  const res = await axios.get(`${SERVER_URL}/member/payMethod`, {
    withCredentials: true,
  })
  return res.data
}

export const useCardInfo = () => {
  return useQuery({
    queryKey: ["CardInfo"],
    queryFn: fetchCardInfo,
  })
}
