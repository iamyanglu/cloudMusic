const  PORT = 3000;
const BASE_URL = 'http://127.0.0.1'
import axios from 'axios'
let request = axios.create(
    {
        baseURL:BASE_URL+':'+PORT
    }
)
export  function logByPhone(obj) {
    return request({
        url:'/login/cellphone',
        method:'post',
        data:{
            phone:obj.user,
            password:obj.pass
        }
    })

}