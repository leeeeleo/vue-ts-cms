import { BASE_URL } from './request/config'
import { axiosRequest } from './request/request'
import localeCache from '../utils/cache'
const axRequest = new axiosRequest({
  baseURL: BASE_URL,
  interceptors: {
    requestinterceptors: (config) => {
      const token = localeCache.getCache('token')
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})
export default axRequest
