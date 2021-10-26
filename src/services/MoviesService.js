const moviesApi = axios.create({
  baseURL: 'https://6wh65vbmy7.execute-api.us-west-2.amazonaws.com/test/movies'
})

class MoviesService {

}

export const moviesService = new MoviesService()