import axios,{AxiosError} from "axios"

const baseURL = process.env.BEEP_IN_BACKEND_URL;

export const api = axios.create({
    baseURL:baseURL,
    headers: {
        'Content-Type':'application/json',
    },
    withCredentials:true,
})