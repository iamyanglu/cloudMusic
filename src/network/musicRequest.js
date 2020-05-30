import axios from 'axios'
let music = axios.create({
    baseURL:'http://127.0.0.1:3000'
})


export  function getMusic(id) {
    return music({
        url:'/song/url',
        params:{

            id:id
        }
    })

}

export  function getIdList(key) {
    return music({

        url:'/search',
        params:{
           keywords:key
        }
    })

}