import axios from 'axios';



function getAssets() {
    return axios.get('https://api.coincap.io/v2/assets?limit=20');
}

const getAsset = (id) =>{
    return axios.get(`https://api.coincap.io/v2/assets/${id}`)
}

const getAssetHistory = (coin) =>{
    const now = new Date()
    const end = now.getTime()
    now.setDate(now.getDate() - 1)
    const start = now.getTime()

    return axios.get(`https://api.coincap.io/v2/assets/${coin}/history?interval=h1&start=${start}&end=${end}`)
}

const getMarkets = (coin) =>{
    return axios.get(`https://api.coincap.io/v2/assets/${coin}/markets?limit=5`)
}
const getExchange = (id) =>{
    return axios.get(`https://api.coincap.io/v2/exchanges/${id}`)
}
export default {
    getAssets,
    getAsset,
    getAssetHistory,
    getMarkets,
    getExchange
}