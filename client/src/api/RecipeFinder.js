import axios from 'axios'


// NODE_ENV = 'development'
// NODE_ENV = 'production'

// if we are in production, baseURL = /api/v1/recipes
// else, baseURL = http://localhost:3001/api/v1/recipes

const baseURL = process.env.NODE_ENV === 'production' ? '/api/v1/recipes' : 'http://localhost:3001/api/v1/recipes'

// const baseURL = "http://localhost:54/api/v1/recipes" //Lan
// const baseURL:"http://72.197.66.232:52/api/v1/recipes" // WAN
// const baseURL:"http://localhost:52/api/v1/recipes" // LOCAL

export default axios.create({
    baseURL: baseURL
})