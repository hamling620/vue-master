import { request } from '@/lib'

export const test = () => request({
  url: '/test'
})

export const login = data => request({
  url: '/login',
  method: 'post',
  data
})

export const validate = () => request({
  url: '/validate'
})
