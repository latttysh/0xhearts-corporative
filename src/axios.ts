import axios from "axios"

const instance = axios.create({
    baseURL: "https://85.192.41.190:4444/",
})


export default instance