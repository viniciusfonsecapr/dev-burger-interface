import axios from  'axios'


const apiDevBuger = axios.create({
    baseURL: 'http://localhost:3001/'
})

apiDevBuger.interceptors.request.use( async config => {
    const userData = await localStorage.getItem('codeburger:userData')
    const token = userData && JSON.parse(userData).token
    config.headers.authorization = `Bearer ${token}`
    return config
})

export default apiDevBuger