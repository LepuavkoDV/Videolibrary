<template>
  <div id="app" class="container-fluid rounded shadow">
    <notifications group="main" />
    <Nav></Nav>
    <section class="heading">
      <h1 class="mb-4 pb-2 text-center">Videolibrary</h1>
    </section>
    <router-view/>
    <Dialogs></Dialogs>
  </div>
</template>

<script lang="js">
import Nav from './components/Nav'
import Dialogs from './components/Dialogs/Index'
import $ from 'jquery'
export default {
  beforeMount () {
    this.$store.dispatch('loadVideos')
    this.$store.dispatch('loadTags')
  },
  data () {
    return {}
  },
  components: {
    Nav,
    Dialogs
  },
  watch: {
    '$route' (to, from) {
      $('[data-toggle="tooltip"]').tooltip('hide')
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

.heading {
  h1 {
    font-family: $font-family-lobster;
    color: darken($primary, 10%);
    border-bottom: 1px solid darken($primary, 10%);
  }
  &:hover {
    text-decoration: none;
  }
}
</style>
