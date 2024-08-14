import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { SERVER_URL } from "../utils/helpers"

export const fetchMemberInfo = async () => {
  const res = await axios.get(`${SERVER_URL}/member/memberInfo`, {
    withCredentials: true,
  })
  return res.data
}

export const useMemberInfo = () => {
  return useQuery({
    queryKey: ["MemberInfo"],
    queryFn: fetchMemberInfo,
  })
}
