import axios from 'axios'
import Env from './env'


// create an axios instance
const service = axios.create({
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
  baseURL: Env.baseUrl, // api的base_url
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(config => {
  console.log(config);
  return config;
}, error => {
  console.log(error); // for debug
  Promise.reject(error)
});

// response interceptor
service.interceptors.response.use(
  response => {
      if(response.data.code != 200){
          return Promise.reject(response);
      }else{
          return Promise.resolve(response);
      }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  });

export default service
