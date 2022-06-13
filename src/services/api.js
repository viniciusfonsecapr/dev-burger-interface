import axios from  'axios'


const apiDevBuger = axios.create({
    baseURL: 'http://localhost:3001/'
})

export default apiDevBuger