import axios from "axios"

const instance = axios.create({
    baseURL: "http://85.192.41.190:4444/",
})


export default instance