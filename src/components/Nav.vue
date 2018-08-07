<template lang="html">

  <section class="pt-2">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link" href="#" data-toggle="tooltip" data-placement="top" title="Add video">
          <font-awesome-icon icon="plus" />
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#" data-toggle="tooltip" data-placement="top" title="Categories">
          <font-awesome-icon icon="folder-open" />
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" data-toggle="tooltip" data-placement="top" title="Tags">
          <font-awesome-icon icon="tags" />
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" data-toggle="tooltip" data-placement="top" title="Authors">
          <font-awesome-icon icon="users" />
        </a>
      </li>
    </ul>
  </section>

</template>

<script lang="js">
import $ from 'jquery'
export default {
  name: 'src-components-nav',
  props: [],
  mounted () {
    $('[data-toggle="tooltip"]').tooltip()
  },
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/_variables.scss";
.nav {
  .nav-link {
    color: $danger;
    &.active {
      color: $white;
      border: 1px solid $danger;
      border-radius: 250%;
      background-color: $danger;
      padding: .25rem .5rem;
      margin: .20rem .2rem 0;
    }
  }
}
</style>
