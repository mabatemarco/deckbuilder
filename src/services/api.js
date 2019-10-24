import axios from "axios";

const key = '3soEAbXGs0eoNYbELe9RnDfgJLhBgpsnr1JWNMsV'
const url = "https://freesound.org/apiv2/search/text/?query=victory&token="

export const GetId = async () => {
  const response = await axios.get(`https://freesound.org/apiv2/sounds/1234/?token=${key}`)
  return response
}