<template>
  <div>
    <h4>This be the time finder</h4>
    <form @submit.prevent="findMovieTimes">

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