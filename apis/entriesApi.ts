import axios from 'axios'

const estriesApi= axios.create({
    baseURL: '/api'
})

export default estriesApi;