import axios from "axios"

axios.defaults.baseURL = 'https://api.unsplash.com'

export  const fetchGallery = async (query, currentPage) => { 
        const res = await axios.get('/search/photos', {
            params: {
            query: query,
            page: currentPage,
            client_id: '7-0PM0Zwah-gxt2fwLK2nvfWU3GgvoYJaKo_K1NKkgc',
            per_page:12,
        }
    })
    return res.data.results

 }