import api from "./api"

const LOGIN = "/account/login"
const USER_INFO = "/account/info"

export const logIn = data => api.post(LOGIN, data)
export const getUserInfo = () => api.get(USER_INFO)