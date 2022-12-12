import axios from "axios"

const instance = axios.create({
    baseURL: "https://0xhearts.com/api",
})


export default instance