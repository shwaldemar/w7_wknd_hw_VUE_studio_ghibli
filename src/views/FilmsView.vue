<template lang="html">
  <div class="film-view" v-if="films.length">
    <vue-film-list :films="films" :favIDs='favIDs'></vue-film-list>
    <vue-film-info v-show="selectedFilm" :film="selectedFilm"><vue-film-info>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import VueFilmList from '@/components/ViewFilmList'
import VueFilmInfo from '@/components/ViewFilmInfo'

export default {
  props: ['films', 'favIDs'],
  data(){
    return {
      selectedFilm: null
    }
  },
  components: {
    "vue-film-info": VueFilmInfo,
    "vue-film-list": VueFilmList
  },
  mounted(){
    eventBus.$on('film-selected', film => this.selectedFilm = film)
  }
}
</script>

<style lang="css" scoped>
.film-view {
  display: flex;
  flex-wrap: wrap;
}
</style>
