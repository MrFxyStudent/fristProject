import axios from 'axios'
export function request(obj) {
    const netWorkAxios = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    netWorkAxios.interceptors.request.use(res => {
        console.log(res);
        return res
    }), err => {
        console.log(err);
    }

    netWorkAxios.interceptors.response.use(res => {
        console.log(res);
        return res
    }), err => {
        console.log(err);
    }

    netWorkAxios(obj).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
}