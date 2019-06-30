<template lang="html">
  <div id="no-favs">
    <h2>You have no favourite Studio Ghibli Films</h2>
    <p>Why not add some <router-link :to="{name: 'films-view' }">here?</p>
  </div>
</template>

<script>
export default {
  name: 'vue-film-no-favourites'
}
</script>

<style lang="css" scoped>
</style>
