import axios from 'axios'
let music = axios.create({
    baseURL:'http://49.235.121.158:3000'
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
export function getSongLIst(id) {
    return music({
        url:'/user/playlist',
        params:{
            uid:id
        }
    })

}
export function getLovedSongs(id){
    return music({
        url:'/likelist',
        params:{
            uid:id,
            cookie:JSON.parse(window.localStorage.getItem('cloudPer')).cookie
        }


    })

}
export function getRecommend(){
    return music({
        url:'/recommend/songs',
        params:{
            cookie:JSON.parse(window.localStorage.getItem('cloudPer')).cookie
        }
    })
}
export  function putLoved(id) {
    return music({
        url:'/like',
        params:{
            id,
            like:true,
            cookie:JSON.parse(window.localStorage.getItem('cloudPer')).cookie
        }
    })

}
export  function getDetail(ids) {
    return music({
        url:'/song/detail',
        params:{
            ids:ids
        }
    })


}
export  function getLyric(id) {
    return music({
        url:'/lyric',
        params:{
            id
        }

    })

}