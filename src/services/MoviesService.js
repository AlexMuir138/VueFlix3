import { AppState } from "../AppState"
import { Movie } from '../models/Movie.js'
import { logger } from "../utils/Logger"

const moviesApi = axios.create({
  baseURL: 'https://6wh65vbmy7.execute-api.us-west-2.amazonaws.com/test/movies'
})

class MoviesService {
async get Movies(){
  const res = await moviesApi.get('')
  AppState.movies = res.data.movies.map(m => new Movie(m))
  logger.log(AppState.movies)
}
}

export const moviesService = new MoviesService()