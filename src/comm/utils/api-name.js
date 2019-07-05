import { post,get } from "../http";


export const requestLogin = param => post('/API/login',param)
