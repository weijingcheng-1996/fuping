import axios from 'axios'
const server = axios.create({
  baseURL:'http://localhost:3000',
  timeout:10000
})
server.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
server.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log(error.response.status)
    return Promise.reject(error)
  }
)
export default server