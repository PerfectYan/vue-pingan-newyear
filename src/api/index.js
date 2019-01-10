import request from '../utils/request';

export function getWXConfig(data) {
    return request({
        url: 'api/pingan/share',
        method: 'post',
        data
    })
}

export function shareRecord(data) {
    return request({
        url: 'api/pingan/share_record',
        method: 'post',
        data
    })
}

export function getDate(data) {
    return request({
        url: 'api/pingan/getdate',
        method: 'post',
        data
    })
}

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


// 合成海报  参数 bless 从本地获取 => sessionStorage.getItem('bless');
export function getPosters(data) {
    return request({
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        url: 'api/pingan/getPosters',
        method: 'post',
        data
    })
}

export function getRedPacket(data) {
    return request({
        url: 'api/pingan/get_red_packet',
        method: 'post',
        data
    })
}


