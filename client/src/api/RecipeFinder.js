import axios from 'axios'

export default axios.create({
    baseURL:"http://192.168.0.3:52/api/v1/recipes" // LAN 
    // baseURL:"http://72.197.66.232:52/api/v1/recipes" // WAN
    // baseURL:"http://localhost:52/api/v1/recipes" // LOCAL
})