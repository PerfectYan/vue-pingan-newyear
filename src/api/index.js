import request from '../utils/request';

export function upload(data) {
    return request({
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        url: 'api/pingan/uploadImg',
        method: 'post',
        data
    })
}

export function getBless(data) {
    return request({
        url: 'api/pingan/returnBless',
        method: 'post',
        data
    })
}


// 合成海报  参数 bless 从本地获取 => localStorage.getItem('bless');
export function getPosters(params) {
    return request({
        url: 'api/pingan/getPosters',
        method: 'post',
        data: params
    })
}
