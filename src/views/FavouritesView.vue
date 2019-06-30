<template lang="html">
  <div>
    <vuefilm-header title="Favourite Films"></vuefilm-header>
    <vuefilm-no-favourites v-if="noFavourites"></vuefilm-no-favourites>

    <div class="favourites-view" v-if="favourites.length">
      <vue-film-list :films="favourites" :favIDs='favIDs'><vue-film-list>
      <vue-film-info v-show="selectedFilm" :film="selectedFilm"><vue-film-info>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import VueFilmList from '@/components/VueFilmList'
import VueFilmInfo from '@/components/VueFilmInfo'
import VueFilmHeader from '@/components/VueFilmHeader'
import VueFilmNoFavourites from '@/components/VueFilmNoFavourites'

export default {
  props: ['favourites', 'favIDs'],
  data(){
    return {
      selectedFilm: null
    }
  },
  computed: {
    noFavourites: function(){
      return this.favourites.length === 0
    }
  },
  components: {
    "vue-film-info": VueFilmInfo,
    "vue-film-list": VueFilmList,
    "vue-film-no-favourites": VueFilmNoFavourites,
    "vue-film-header": VuefilmHeader
  },
  mounted(){
    eventBus.$on('film-selected', film => this.selectedFilm = film)
  }
}
</script>

<style lang="css" scoped>
.favourites-view {
  display: flex;
  flex-wrap: wrap;
}
</style>
