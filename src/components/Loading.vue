<template lang="html">

  <section class="src-components-loading d-flex flex-column align-items-center m-0 p-0">
    <progress-bar class="w-25" :value="_props.progress"/>
    <h5 class="loading-text">Loading</h5>
  </section>

</template>

<script lang="js">
export default {
  name: 'src-components-loading',
  props: ['progress'],
  mounted () {},
  data () {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
@import "../assets/scss/_variables.scss";
.loading-text {
  animation: loading 1s infinite 0s linear;
  color: $primary;
  font-family: $font-family-jura;
}
@keyframes loading {
  0% {
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: rotate(xx) scale(1);
  }
}
</style>
