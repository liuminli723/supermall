//导出多个实例
import axios from 'axios'
//4、使用Promise解决简便写法
export function request(config) {

    //1、创建axios的实例
    const instance =axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
   } )
  //2、axios拦截器
  //2.1请求拦截
  axios.interceptors.request.use(config =>{
    // console.log(config);
    return config
  },err =>{
    //console.log(err);
  })
  //2.2响应拦截
  axios.interceptors.response.use(res =>{
    //console.log(res);
    return res.data
  },err => {
    console.log(err);
  })
    //3、发送真正的网络请求
   return instance(config)
}
//3、使用Promise
// export function request(config) {
//   return new Promise((resolve,reject) =>{
//     //1、创建axios的实例
//     const instance =axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:5000
//     })
//     //发送真正的网络请求
//     instance(config)
//       .then(res =>{
//         resolve(res)
//       })
//       .catch(err =>{
//         reject(err)
//       })
//   })
// }

// export function request(config) {
//   //1、创建axios的实例
//   const instance =axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   //发送真正的网络请求
//   instance(config.baseConfig)
//     .then(res =>{
//       //console.log(res);
//       config.success(res)
//     })
//     .catch(err =>{
//       //console.log(err);
//       config.failure(err)
//     })
// }
// export function request(config,success,failure) {
//   //1、创建axios的实例
//   const instance =axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   //发送真正的网络请求
//   instance(config)
//     .then(res =>{
//      //console.log(res);
//       success(res)
//     })
//     .catch(err =>{
//       //console.log(err);
//       failure(err)
//     })
// }
