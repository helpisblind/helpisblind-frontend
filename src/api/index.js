import axios from 'axios'
import { API_URL } from './constants'

export function getPledge () {
  return axios.get(`${API_URL}/fundraisings`)
}
