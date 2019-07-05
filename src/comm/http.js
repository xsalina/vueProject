/*
 * 
 * 
 * @Description: axios配置，请求拦截，及get，post封装
 * 
 * 
 */


import axios from 'axios'
import {
    Message
} from 'element-ui'
// 引入qs模块，用来序列化post类型的数据
import QS from "qs";
import {config} from './config'
// axios 基本配置
// 设置十秒提示请求超时
axios.defaults.timeout = 10000;
// axios发请求默认不允许携带cookie,我们需要手动设置允许携带cookie
axios.defaults.withCredentials = true;
// post请求的时候，加上一个请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.defaults.baseURL = config.BASE_URL;



// axios请求拦截器
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});


// axios响应拦截器
axios.interceptors.response.use(function (response) {
    console.log('------http响应结果开始------');
    console.log(response);
    console.log('------http响应结果结束-----');
    // session超时自动跳转到登录页面
    if(response.data.code == 8001){
        setTimeout(() => {
            router.push({ path: '/login' });
        }, 1000);
    }
    return response;
}, function (error) {
    if(error.message){
        Message.error(error.message);
    }
    console.log('------错误响应结果开始------');
    console.log(error);
    console.log('------错误响应结果结束------');
    return Promise.reject(error);
});




/**
 * 对get方法进行封装
 * @param {string} url [请求地址]
 * @param {object} params [请求参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    })
}

/**
 * 对post方法进行封装
 * @param {string} url [请求地址]
 * @param {objec} params [请求参数]
 */
export function post(url, params) {
    // console.log( QS.stringify(params));
    return new Promise((resolve, reject) => {
        axios.post(url,params)
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err.data);
            })
    })
}

export default axios

