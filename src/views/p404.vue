<template lang="html">

  <section class="src-views-p-404 d-flex flex-column justify-content-center align-items-center">
    <font-awesome-icon class="sad" icon="sad-tear"></font-awesome-icon>
    <h1>404 Not Found</h1>
  </section>

</template>

<script lang="js">
export default {
  name: 'src-views-p-404',
  props: [],
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
.src-views-p-404 {
  height: 50vh;
  color: $primary;
  .sad {
    font-size: 5rem;
  }
  a {
    font-weight: bold;
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
