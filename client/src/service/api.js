import axios from 'axios'

const url = 'http://localhost:8000'

export const postUser = async (user) => {
    return await axios.post(`${url}/signup`,user)
}

export const userLogin = async (user) => {
    return await axios.post(`${url}/login`,user)
}