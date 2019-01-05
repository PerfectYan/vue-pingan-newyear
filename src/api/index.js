import request from '../utils/request';

export function upload(data) {
  return request({
    url: 'api/pingan/uploadImg',
    method: 'post',
    data
  })
}


// 合成海报  参数 bless 从本地获取 => localStorage.getItem('bless');
export function getPosters(data) {
  return request({
    url: 'api/pingan/getPosters',
    method: 'post',
    data
  })
}



// export function logout() {
//   return request({
//     url: '/login/logout',
//     method: 'post'
//   })
// }

// export function getUserInfo(token) {
//   return request({
//     url: '/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

