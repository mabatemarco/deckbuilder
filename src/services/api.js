import axios from "axios";

const key = '3soEAbXGs0eoNYbELe9RnDfgJLhBgpsnr1JWNMsV'
const url = "https://freesound.org/apiv2/search/text/?query=victory&fields=url&token="

export const GetId = async () => {
  const response = await axios.get(`${url}${key}`)
  return response
}