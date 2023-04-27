import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 1.创建实例时配置默认值
const instance = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  timeout: 5000,
})

// 2.添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 2.添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 3.对axios的api进行二次封装，目的是添加自定义的类型注解(配合使用引用axios默认提供的注解，调用axios方法后可以看到axios的默认注解)
//统一将api的参数变为三个参数URL，data，config。

interface Data {
  [index: string]: unknown
}

interface Http {
  get: (
    url: string,
    data?: Data,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse>
  post: (
    url: string,
    data?: Data,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse>
  put: (
    url: string,
    data?: Data,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse>
  patch: (
    url: string,
    data?: Data,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse>
  delete: (
    url: string,
    data?: Data,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse>
}

//3.将axios的api自定义封装为http，统一变为三个参数（内部仍是调用axios,对参数进行处理）
const http: Http = {
  get(url, data, config) {
    // axios.get方法只有两个参数，第二个参数params接收数据，书写config配置
    return instance.get(url, { params: data, ...config })
  },
  // post方法是三个参数
  post(url, data, config) {
    return instance.post(url, data, config)
  },
  put(url, data, config) {
    return instance.put(url, data, config)
  },
  patch(url, data, config) {
    return instance.patch(url, data, config)
  },
  // delete方法时两个参数，第二个参数使用data接收数据，并书写config
  delete(url, data, config) {
    return instance.delete(url, { data, ...config })
  },
}

export default http
