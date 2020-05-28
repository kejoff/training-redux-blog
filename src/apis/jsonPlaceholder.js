import axios from 'axios'

// Bypass Cors protection on Firefox
const corsE = 'https://cors-anywhere.herokuapp.com/'

export default axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`
})