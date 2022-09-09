import axRequest from '..'
import { IAccount } from './type'
import { IDataType, ILoginType } from './type'
enum LoginApi {
  account = '/login',
  userInfo = '/users/',
  userMenus = '/role/'
}
//请求登录账户数据的
export function accountLoginAction(account: IAccount) {
  return axRequest.post<IDataType<ILoginType>>({
    url: LoginApi.account,
    data: account
  })
}
//请求数据用户信息的
export function requestUserInfoById(id: number) {
  return axRequest.get<IDataType>({
    url: LoginApi.userInfo + id,
    showLoading: false
  })
}
//请求角色菜单的
export function requestMenuByRoleId(id: number) {
  return axRequest.request<IDataType>({
    url: LoginApi.userMenus + id + '/menu',
    showLoading: false
  })
}
