import axios from 'axios'
import { getToken } from '@/utils'

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/'

class HttpRequest {
  constructor () {
    this.baseURL = BASE_URL
    this.timeout = 3000
  }

  setInterceptors (instance) {
    instance.interceptors.request.use(config => {
      config.headers.Authorization = getToken()
      return config
    }, err => {
      return Promise.reject(err)
    })

    instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      return Promise.reject(err)
    })
  }

  request (config) {
    const instance = axios.create()
    config = {
      baseURL: this.baseURL,
      timeout: this.timeout,
      ...config
    }
    this.setInterceptors(instance)
    return instance.request(config)
  }
}

const httpRequest = new HttpRequest()
const request = httpRequest.request.bind(httpRequest)

export default request
