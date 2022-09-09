import axios, { AxiosInstance } from 'axios'
import { ElLoading } from 'element-plus'
import type { requestConfig, requestInterceptors } from './type'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'
export class axiosRequest {
  instance: AxiosInstance
  interceptors?: requestInterceptors
  loading?: LoadingInstance
  showLoading?: boolean
  constructor(config: requestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true
    //每个的拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestinterceptors,
      this.interceptors?.requestinterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseinterceptors,
      this.interceptors?.responseinterceptorsCatch
    )
    //所有实例拦截
    this.instance.interceptors.request.use(
      (config) => {
        // this.loading = ElLoading.service({
        //   lock: true,
        //   text: '正在请求',
        //   background: 'rgba(0,0,0,0.5)'
        // })
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        //返回的结果，axios进行了封装，请求方式之类，只需要data，就返回data
        return res.data
      },
      (err) => {
        return err
      }
    )
  }
  request<T>(config: requestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestinterceptors) {
        // 执行一下，然后再返回出去，对其进行修改，然后再返回出去
        config = config.interceptors.requestinterceptors(config)
      }
      //传入为flase，默认不显示loading
      this.instance.request<any, T>(config).then((res) => {
        if (config.interceptors?.responseinterceptors) {
          res = config.interceptors.responseinterceptors(res)
        }
        if (config.showLoading === false) {
          this.showLoading = config.showLoading
        } else {
          this.showLoading = true
        }
        resolve(res)
      })
    })
  }
  get<T>(config: requestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: requestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: requestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: requestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
