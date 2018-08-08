<template>
  <div id="app" class="container-fluid w-75 my-5 px-5 pb-2 rounded shadow">
    <Nav></Nav>
    <section class="heading">
      <router-link to="/"><h1 class="mb-4 pb-2 text-center">Videolibrary</h1></router-link>
    </section>
    <router-view/>
  </div>
</template>

<script lang="js">
import Nav from './components/Nav'
export default {
  beforeMount () {
    this.$store.dispatch('loadVideos')
    this.$store.dispatch('loadCategories')
    this.$store.dispatch('loadTags')
  },
  components: {
    Nav
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

.heading {
  a {
    h1 {
      font-family: $font-family-lobster;
      color: $danger;
      border-bottom: 1px solid $danger;
    }
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
