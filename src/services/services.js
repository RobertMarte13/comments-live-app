import axios from "axios";

export const getComments = async () => {
    try {
        const res = await axios.get('https://server-anisearch-production.up.railway.app/api/comment')
        return res.data.data[0]
    } catch (error) {
        console.log(error)
    }
}