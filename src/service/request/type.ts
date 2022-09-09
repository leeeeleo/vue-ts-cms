import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface requestInterceptors<T = AxiosResponse> {
  requestinterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestinterceptorsCatch?: (error: any) => any
  responseinterceptors?: (res: T) => T
  responseinterceptorsCatch?: (error: any) => any
}
export interface requestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: requestInterceptors<T>
  showLoading?: boolean
}
