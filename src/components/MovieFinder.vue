<template>
  <div>
    <form @submit.prevent="findMovies">
      <div class="d-flex align-items-center m-3">

      <input v-model="query" 
      type="text" 
      name="search"  
      class="form-control bg-white border-0 m-2" 
        placeholder="Search for a Movie!">
        <button class="btn btn-primary mx-3 shadow" type="submit">
          <i class="mdi mdi-movie-search text-white f-20"></i>
        </button>
      </div>
    </form>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import { onMounted } from "@vue/runtime-core"
import { moviesService } from '../services/MoviesService'
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"

export default {
  setup(){
    const query = ref('')

    onMounted(() => {
      moviesService.getMovies()
      AppState.searchedMovies = window.localStorage.getItem('phrase')
      query.value = AppState.searchPhrase
      logger.log('search phrase', AppState.searchPhrase)
    })
    return {
      query,
      async findMovies(){
        try {
         await moviesService.searchMovies(query.value) 
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  },
  components:{}
}
</script>


<style lang="scss" scoped>

</style>