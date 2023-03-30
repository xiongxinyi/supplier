import axios from "axios"
import { ElLoading } from 'element-plus'
import { ElMessage } from 'element-plus'
// 使用create 创建axios实例
const loadingObj = null
const Service = axios.create({
    timeout:8000,
    baseURL:"http://XXX",
    headers:{
        "Content-type":"application/json;charset=utf-8"
    }
})
// 请求拦截-增加loading 对请求做统一处理
Service.interceptors.request.use(config=>{
    loadingObj=ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      })
      return config
})
// 响应拦截-对返回值做统一处理
Service.interceptors.response.use(response=>{
    loadingObj.close()
    return response.data
},error=>{
    loadingObj.close()
    ElMessage({
        message:"服务器错误",
        type:"error",
        duration:2000
    })
})