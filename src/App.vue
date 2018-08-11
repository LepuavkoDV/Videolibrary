<template>
  <div id="app" class="container-fluid w-75 my-5 px-5 pb-2 rounded shadow">
    <notifications group="main" />
    <Nav></Nav>
    <section class="heading">
      <router-link to="/"><h1 class="mb-4 pb-2 text-center">Videolibrary</h1></router-link>
    </section>
    <router-view/>
    <Dialogs></Dialogs>
  </div>
</template>

<script lang="js">
import Nav from './components/Nav'
import Dialogs from './components/Dialogs/'
export default {
  beforeMount () {
    this.$store.dispatch('loadVideos')
    this.$store.dispatch('loadCategories')
    this.$store.dispatch('loadTags')
  },
  data () {
    return {}
  },
  components: {
    Nav,
    Dialogs
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
