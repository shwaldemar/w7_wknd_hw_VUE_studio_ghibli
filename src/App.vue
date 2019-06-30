<template>
  <div id="app">
    <vuefilm-navbar/>
    <viewfilm-header title="VueFilm"/>
    <viewfilm-header v-if="!films.length" title="LOADING..."/>
    <router-view :films="films" :favourites="favourites" :favIDs="favouriteIDs" id="view"/>
  </div>
</template>

<script>
import {eventBus} from '@/main'
import VuefilmHeader from '@/components/Vuefilmheader'
import VuefilmNavBar from '@/components/VuefilmNavBar'

export default {
  name: 'app',
  components: {
    'vuefilm-header': VuefilmHeader,
    'vuefilm-navbar': VuefilmNavBar
  },
  data(){
    return {
      films: [],
      favouriteIDs: []
    }
  },
  computed: {
    favourites: function(){
      return this.favouriteIDs.map(id => this.films.find(film => film.id === id))
    }
  },
  methods: {

    getFilms: function(){
      const promises = [1,2,3,4,5].map(num => {
        return fetch(`https://ghibliapi.herokuapp.com/films?page${num}&per_page=80`)
        .then(res = res.json())
      })

      promise.all(promises)
      .then(data => this.films = data.reduce((flat, to Flatten) => flat.concat(toFlatten), []))
      .then(() => this.sortFilms("title"));
    },

    sortFilms: function(property) {
      this.films.sort((a, b) => {
        return a[property] < b[property] ? -1 : 1
      })
    },

    addFavourite: function(id){
      this.favouriteIDs.push(id)
    },

    removeFavourite: function(id){
      const index = this.favouriteIDs.indexOf(id)
      this.favouriteIDs.splice(index, 1)
    }
  },
  mounted(){

    this.getFilms()

    eventBus.$on('favourite-added', id => this.addFavourite(id))

    eventBus.$on('favourite-removed', id => this.removeFavourite(id))
  }
}
</script>

<style lang="css" scoped>
#app {

}
</style>
