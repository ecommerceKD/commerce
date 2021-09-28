import axios from 'axios'

export const axiosApi = axios.create({
    baseURL: "http://localhost:8980/",
    headers : { 
        "content-type": "application/json"
    }
})