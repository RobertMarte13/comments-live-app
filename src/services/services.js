import axios from "axios";

export const getComments = async () => {
    try {
        const res = await axios.get('https://server-anisearch-production.up.railway.app/api/comment')
        return res.data.data[0]
    } catch (error) {
        console.log(error)
    }
}

export const setRegister = async (username, password) => {
    try {
        console.log(username, password)
        await axios.post('https://server-anisearch-production.up.railway.app/api/register', {
            username,
            password
        })


        return window.alert('Cuenta creada con exito!')
    } catch (error) {
        window.alert(error.response.data.message)
    }
}

export const loginService = async (username, password) => {
    try {
        console.log(username, password)
        const response = await axios.get(`https://server-anisearch-production.up.railway.app/api/login/${username}/${password}`)

        return response.data
    } catch (error) {
        console.log(error)
    }
}