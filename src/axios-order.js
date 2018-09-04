import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burgermenu-f2f26.firebaseio.com/'
})

export default instance
