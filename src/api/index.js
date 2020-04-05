import axios from 'axios'
import { API_URL } from './constants'

export function getFundraise () {
  return axios.get(`${API_URL}/fundraisings`)
}

export function postFundraise (body) {
  return axios.post(`${API_URL}/fundraisings`, body)
}

export function getDonation (id) {
  return axios.get(`${API_URL}/donations/${id}`)
}

export function postDonation (body) {
  return axios.post(`${API_URL}/donations`, body)
}

export function getMessagesByFundraisingId (fundraisingId) {
  return axios.get(`${API_URL}/fundraisings/messages/${fundraisingId}`)
}

