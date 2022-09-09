import axRequest from "..";
export function getPageList(url: string, queryInfo: any) {
    return axRequest.post({
        url: "/users/list",
        data: queryInfo
    })
}