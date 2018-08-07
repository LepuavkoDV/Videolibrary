<template>
  <div id="app" class="container-fluid w-75 my-5 px-5 pb-2 rounded shadow">
    <Nav></Nav>
    <section class="heading">
      <h1 class="mb-4 pb-2 text-center">Videolibrary</h1>
    </section>
    <router-view/>
  </div>
</template>

<script lang="js">
import Nav from './components/Nav'
export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

.heading {
  h1 {
    font-family: $font-family-lobster;
    color: $danger;
    border-bottom: 1px solid $danger;
  }
}
</style>
