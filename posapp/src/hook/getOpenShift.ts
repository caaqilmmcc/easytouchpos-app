import axios from 'axios'

export const getOpeningShit = async (user: string) => {
  const res = await axios.get(
    '/api/method/easytouchpos.easytouchpos.api.posapp.check_opening_shift',
    {
      params: { user: user },
    }
  )
  return res.data
}
