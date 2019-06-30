<template lang="html">
  <div class="film-list" v-if="films.length">
    <vue-film-list-item v-for"(film, index) in films" :film="film" :key="index" :favIDs="favIDs"></vue-film-list-item>
  </div>
</template>

<script>
import VueFilmListItem from '@/components/VueFilmListItem'

export default {
  name: 'vue-film-list',
  props: ['films', 'favIDs'],
  components: {
    'vue-film-list-item': VueFilmListItem
  }
}
</script>

<style lang="css" scoped>
.film-list {
  width: 45%;
  height: 550px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
}
</style>
