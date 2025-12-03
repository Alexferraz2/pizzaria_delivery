    import axios from 'axios'

export const api = axios.create({
    baseURL: `${process.env.Next_PUBLIC_BASE_URL}/api`,
})