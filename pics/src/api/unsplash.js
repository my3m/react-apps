import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3qpRhb3T8DMnhKLKy7XDALUG-lu-G2dHIcz2ppPdVHI'
    }
});