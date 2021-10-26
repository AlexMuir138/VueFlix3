<template>
  <div>
    <form @submit.prevent="findMovieTimes">
      <div class="form-group d-flex align-items-center m-3
      ">

      <input v-model="query" 
      type="text" 
      name="search times" 
      class="form-control bg-white border-0 m-2" 
      placeholder="Search Times"
      >
      <button class="btn btn-info mx-3">
        <i class="mdi mdi-movie-search text-white f-20"></i>
      </button>
      </div>
    </form>
  </div>
</template>


<script>
import { ref } from '@vue/reactivity'
import { AppState } from '../AppState'

import Pop from "../utils/Pop"
import { moviesService } from "../services/MoviesService"
import { onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
export default {

  setup(){
    const query = ref('')
     onMounted(() => {
      moviesService.getMovies()
      AppState.searchTime = window.localStorage.getItem('time')
      query.value = AppState.searchTime
      logger.log('search time', AppState.searchTime)
    })
    return {
      query,
      async findMovieTimes(){
        try {
          await moviesService.searchMovieTimes(query.value)
        } catch (error) {
          Pop.toast(error.message, 'error' )
        }
      }
    }
  },
  components:{}
}
</script>


<style lang="scss" scoped>

</style>