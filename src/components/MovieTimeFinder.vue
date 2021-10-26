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
      <button class="btn btn-secondary mx-3"></button>
      </div>
    </form>
  </div>
</template>


<script>
import { ref } from '@vue/reactivity'

import Pop from "../utils/Pop"
export default {

  setup(){
    const query = ref('')
    return {
      query,
      async findMovieTimes(){
        try {
          
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