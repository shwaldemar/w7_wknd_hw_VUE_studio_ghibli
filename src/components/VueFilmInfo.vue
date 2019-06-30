<template lang="html">
  <div id="film-info-container">
    <vuefilm-header :title="film.title"/>
    <div id="film-text">
      <p>Director: {{film.director}}</p>
      <p>Producer: {{film.producer}}</p>
      <p>Release Date: {{film.release_date}}</p>
      <p>Description: {{film.description}}</p>
    </div>
  </div>
</template>

<script>
import VueFilmHeader from '@/components/VueFilmHeader'

export default {
  props: ['film'],
  components: {
    'vuefilm-header': VuefilmHeader
  },
}
</script>

<style lang="css" scoped>

#film-info-container {
  width: 55%;
  display: flex;
}

#film-text {
  font: 13px Futura;
  margin-left: 10%;
  margin-right: 10%;
  word-wrap: normal;
}
</style>
