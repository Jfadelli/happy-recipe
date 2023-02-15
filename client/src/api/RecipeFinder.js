import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'production' ? '/http://192.168.0.37:3001/api/v1/recipes' : 'http://192.168.0.37/api/v1/recipes'

export default axios.create({
    baseURL: baseURL
})