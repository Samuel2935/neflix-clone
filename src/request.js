
const API_KEY = '52876d08d3e27788cb22d577839a5853';

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language-en-US`,
    fetchNeflixOriginals: ` /discover/tv?api_key=${API_KEY}&with_networks=213 `,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language-en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default request;