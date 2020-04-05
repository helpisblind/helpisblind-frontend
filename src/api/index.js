import axios from 'axios'
import { API_URL } from './constants'

export function getFundraise () {
  return axios.get(`${API_URL}/fundraisings`)
}

export function postFundraise (body) {
  return axios.post(`${API_URL}/fundraisings`, body)
}

export function postDonation (body) {
  return axios.post(`${API_URL}/donations`, body)
}

