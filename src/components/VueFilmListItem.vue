<template lang="html">
  <div class="filmlistitem">
    <p>{{film.title}}</p>
    <p>{{film.director}}</p>
    <p>{{film.producer}}</p>
    <p>{{film.release_date}}</p>
    <p>{{film.description}}</p>

    <button v-on:click='displayInfo'>More Info &rarr;</button>

    <button v-if="!isFavourite" v-on:click="addFavourite">Add to Favourites</button>
    <button v-if="isFavourite" v-on:click="removeFavourite">Remove from Favourites</button>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  name: 'vue-film-list-item',
  props: ['film', 'favIDs'],
  components: {

  },
  computed: {
    isFavourite: function(){
      return this.favIDs.includes(this.film.id)
    }
  },
  methods: {
    displayInfo: function(){
      eventBus.$emit('film-selected', this.film)
    },

    addFavourite: function(){
      eventBus.$emit('favourite-added', this.film.id)
    },

    removeFavourite: function(){
      eventBus.$emit('favourite-removed', this.film.id)
    }
  },
}
</script>

<style lang="css" scoped>
p {
  font: bold 13px Futura;
}

.beerlistitem {
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  width: 150px;
  height: 225px;
  border-radius: 25px;
  border: 2px solid navy;
  background-color: white;
}

button {
  font: bold 11px Futura;
  text-decoration: none;
  background-color: white;
  color: navy;
  padding: 2px 6px 2px 6px;
  border-top: 1px solid navy;
  border-bottom: 1px solid navy;
  border-left: 1px solid navy;
  border-right: 1px solid navy;
}
</style>
